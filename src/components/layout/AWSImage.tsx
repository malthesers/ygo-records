import getImageAWS from '@/services/getImageAWS'
import Image, { StaticImageData } from 'next/image'

interface S3ImageProps {
  src: string
  alt: string
  width?: number | `${number}`
  height?: number | `${number}`
  priority?: boolean
  fill?: boolean
  className?: string
}

export default async function AWSImage({ src, alt, ...rest }: S3ImageProps) {
  const imageUrl = await getImageAWS(src)

  return <Image src={imageUrl} alt={alt} {...rest} />
}
