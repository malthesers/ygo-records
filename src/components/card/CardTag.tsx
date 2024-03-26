import { ICard } from '@/interfaces/card'
import Image from 'next/image'
import Level from '~/images/frame-assets/level.webp'
import Rank from '~/images/frame-assets/rank.webp'

interface CardTagProps {
  card: ICard
}

export default function CardTag({ card }: CardTagProps) {
  return (
    <div className='w-[76%] h-[6%] mt-[7%] mx-auto flex flex-row justify-between overflow-hidden'>
      {/* { card. <p>[Spell Card]</p>} */}
      {/* {card.cardType} */}
    </div>
  )
}
