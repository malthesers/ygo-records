import { GetObjectCommand, HeadObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import s3Client from './s3Client'
import hieroglyphicsBlue from '~/images/splash/hieroglyphs-blue.png'

/**
 * Generates and returns a signed url for the resource expiring in 1 hour or hieroglyphics if resource does not exist.
 *
 * @param src Source of the requested image in the S3 bucket.
 * @returns Signed url for the resource expiring in 1 hour or hieroglyphics if error.
 */
export default async function getS3Image(src: string) {
  const s3Params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: src,
  }

  const headCommand = new HeadObjectCommand(s3Params)
  const getCommand = new GetObjectCommand(s3Params)

  try {
    await s3Client.send(headCommand)
    return getSignedUrl(s3Client, getCommand, { expiresIn: 3600 })
  } catch (error) {
    return hieroglyphicsBlue.src
  }
}
