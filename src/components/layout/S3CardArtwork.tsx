import getS3CardImage from '@/services/getS3CardImage'
import Image from 'next/image'

interface S3CardArtworkProps {
  passcode: string
  alt: string
  width?: number | `${number}`
  height?: number | `${number}`
  priority?: boolean
  fill?: boolean
  className?: string
}

export default async function S3CardArtwork({ passcode, alt, ...props }: S3CardArtworkProps) {
  const imageUrl = await getS3CardImage(passcode, 'artwork')

  return <Image src={imageUrl} alt={alt} {...props} />
}
