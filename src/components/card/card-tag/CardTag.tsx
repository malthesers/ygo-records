import { ICard } from '@/interfaces/card'
import Image from 'next/image'
import CardTagLevel from './CardTagLevel'
import CardTagRank from './CardTagRank'

interface CardTagProps {
  card: ICard
}

export default function CardTag({ card }: CardTagProps) {
  return (
    <div className='w-full h-[4.5%] mt-[18%] mx-auto'>
      {/* {(card.cardType === 'Spell' || card.cardType === 'Trap') && <p className='w-[79%]'>[{card.cardType} Card]</p>} */}
      {card.cardType === 'Monster' && card.monsterCardType === 'Xyz' && <CardTagRank rank={card.rank} />}
      {card.cardType === 'Monster' && card.monsterCardType !== 'Xyz' && card.monsterCardType !== 'Link' && (
        <CardTagLevel level={card.level} />
      )}
    </div>
  )
}
