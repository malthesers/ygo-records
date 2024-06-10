import { Frame } from '@/interfaces/card/monster'
import Image from 'next/image'

interface CardFrameProps {
  frame: string
}

export default function CardFrame({ frame }: CardFrameProps) {
  return (
    <Image
      src={`/images/card-frame/${frame}.jpg`}
      alt='yugioh card frame'
      className='w-[93%] pt-[4%] mx-auto'
      width={475}
      height={550}
      priority
    />
  )
}
