import { CardArtwork, CardFrame, CardLinkArrows, CardLinkRating, CardNameplate, CardTag } from '.'
import { ICard } from '@/interfaces/card'
import Image from 'next/image'
import pendulumFrame from '~/images/card-frame/pendulum.webp'
import cardBorder from '~/images/card-frame/card-border.jpg'

interface CardProps {
  card: ICard
}

export default function Card({ card }: CardProps) {
  const isPendulum = card.cardType === 'Monster' && card.pendulum ? true : false
  const isLink = card.cardType === 'Monster' && card.monsterCardType === 'Link'

  return (
    <div className='relative w-full max-w-96 h-fit mx-auto grid *:grid-center text-black'>
      <Image src={cardBorder} alt='yugioh card border' priority />
      <CardFrame frame={card.frame} />
      <CardNameplate card={card} />
      <CardTag card={card} />
      <CardArtwork card={card} isPendulum={isPendulum} />
      {isPendulum && <Image src={pendulumFrame} alt='yugioh card pendulum frame' className='w-[93%] m-auto' />}
      {isLink && <CardLinkRating rating={card.rating} />}
      {isLink && <CardLinkArrows arrows={card.arrows} />}
    </div>
  )
}
