import getS3CardImage from '@/services/getS3CardImage'
import getS3Image from '@/services/getS3Image'
import Image from 'next/image'

interface S3ImageProps {
  src: string
  alt: string
  width?: number | `${number}`
  height?: number | `${number}`
  priority?: boolean
  fill?: boolean
  className?: string
}

export default async function S3Image({ src, alt, ...props }: S3ImageProps) {
  const imageUrl = await getS3Image(src)

  return <Image src={imageUrl} alt={alt} {...props} />
}
