import { GetObjectCommand, HeadObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import s3Client from './s3Client'
import getYGOProImageUrl from './getYGOProImageUrl'
import artworkPlaceholder from '~/images/placeholders/artwork.jpg'

/**
 * Fetches signed signed url for a card image and returns it.
 * Fetches image from YGOPro and uploads it to S3 bucket if not there already.
 *
 * @param passcode Passcode of the card in a string.
 * @param type Type of image being the artwork or the render.
 * @returns Signed url for the resource or placeholder if error.
 */
export default async function getS3CardImage(passcode: string, type: 'artwork' | 'render') {
  const s3Params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `cards/${type}/${passcode}.jpg`,
  }

  const headCommand = new HeadObjectCommand(s3Params)
  const getCommand = new GetObjectCommand(s3Params)

  try {
    await s3Client.send(headCommand)

    return getSignedUrl(s3Client, getCommand)
  } catch (error: any) {
    if (error.name === 'NotFound') {
      try {
        const imageUrl = getYGOProImageUrl(passcode, type)
        const response = await fetch(imageUrl)
        const image = await response.arrayBuffer()
        const buffer = Buffer.from(image)

        const putCommand = new PutObjectCommand({ ...s3Params, Body: buffer })

        await s3Client.send(putCommand)

        return await getSignedUrl(s3Client, getCommand)
      } catch (uploadError) {
        console.error(uploadError)

        return artworkPlaceholder.src
      }
    }

    return artworkPlaceholder.src
  }
}
