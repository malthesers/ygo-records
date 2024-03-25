import { ICard } from '@/interfaces/card'
import Image from 'next/image'
import cardBorder from '~/images/card-frame/card-border.jpg'

interface CardProps {
  card: ICard
}

export default function Card({ card }: CardProps) {
  return (
    <div className='relative max-w-96 h-fit mx-auto grid *:grid-center'>
      <Image src={cardBorder} alt='yugioh card border' priority />
      <Image
        src={`/images/card-frame/${card.frame}.jpg`}
        alt='yugioh card frame'
        className='m-auto w-[93%]'
        width={475}
        height={550}
        priority
      />
    </div>
  )
}
