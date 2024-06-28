import { HeadObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3'
import s3Client from './s3Client'
import getYGOProImageUrl from './getYGOProImageUrl'
import artworkPlaceholder from '~/images/placeholders/artwork.jpg'
import renderPlaceholder from '~/images/placeholders/render.jpg'

/**
 * Fetches signed signed url for a card image and returns it.
 * Fetches image from YGOPro and uploads it to S3 bucket if not there already.
 *
 * @param passcode Passcode of the card in a string.
 * @param type Type of image being the artwork or the render.
 * @returns Signed url for the resource or placeholder if error.
 */
export default async function getS3CardImage(passcode: string, type: 'artwork' | 'render') {
  const placeholderUrl = type === 'render' ? renderPlaceholder.src : artworkPlaceholder.src
  const baseUrl = 'https://d226phivga1jdo.cloudfront.net'
  const imageUrl = `${baseUrl}/cards/${type}/${passcode}.jpg`
  const s3Params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `cards/${type}/${passcode}.jpg`,
  }

  console.log(baseUrl)

  const headCommand = new HeadObjectCommand(s3Params)

  try {
    await s3Client.send(headCommand)

    return imageUrl
  } catch (error: any) {
    if (error.name === 'NotFound') {
      try {
        const YGOProImageUrl = getYGOProImageUrl(passcode, type)
        const response = await fetch(YGOProImageUrl)
        const image = await response.arrayBuffer()
        const buffer = Buffer.from(image)

        const putCommand = new PutObjectCommand({ ...s3Params, Body: buffer })

        await s3Client.send(putCommand)

        return imageUrl
      } catch (uploadError) {
        console.error(uploadError)

        return placeholderUrl
      }
    }

    return placeholderUrl
  }
}
