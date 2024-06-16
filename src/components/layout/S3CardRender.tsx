import getS3CardImage from '@/services/getS3CardImage'
import Image from 'next/image'

interface S3CardRenderProps {
  passcode: string
  alt: string
  width?: number | `${number}`
  height?: number | `${number}`
  priority?: boolean
  fill?: boolean
  className?: string
}

export default async function S3CardRender({ passcode, alt, ...props }: S3CardRenderProps) {
  const imageUrl = await getS3CardImage(passcode, 'render')

  return <Image src={imageUrl} alt={alt} {...props} />
}
