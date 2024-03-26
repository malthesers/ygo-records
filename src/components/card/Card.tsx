import { ICard } from '@/interfaces/card'
import Image from 'next/image'
import pendulumFrame from '~/images/card-frame/pendulum.webp'
import cardBorder from '~/images/card-frame/card-border.jpg'
import CardNameplate from './CardNameplate'

interface CardProps {
  card: ICard
}

export default function Card({ card }: CardProps) {
  return (
    <div className='relative w-full max-w-96 h-fit mx-auto grid *:grid-center text-black'>
      <Image src={cardBorder} alt='yugioh card border' priority />
      <Image
        src={`/images/card-frame/${card.frame}.jpg`}
        alt='yugioh card frame'
        className='w-[93%] m-auto'
        width={475}
        height={550}
        priority
      />
      <CardNameplate name={card.name} attribute={card.attribute} />
      <Image
        src={`/images/placeholders/${card.id}.jpg`}
        alt={`${card.name} artwork`}
        className={[card.pendulum ? 'mt-[26%] w-[87%]' : 'mt-[27%] w-[76%]'] + ' mx-auto'}
        width={450}
        height={450}
        priority
      />
      {card.pendulum && <Image src={pendulumFrame} alt='yugioh card pendulum frame' className='w-[93%] m-auto' />}
    </div>
  )
}
