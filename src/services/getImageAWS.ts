import { GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import s3Client from './s3Client'

export default function getImageAWS(src: string) {
  const command = new GetObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: src,
  })

  return getSignedUrl(s3Client, command, { expiresIn: 3600 })
}
