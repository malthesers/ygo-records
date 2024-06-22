import { ICard } from '@/interfaces/card'
import MonsterCardInfo from './MonsterCardInfo'
import SpellCardInfo from './SpellCardInfo'
import TrapCardInfo from './TrapCardInfo'

interface CardInfoProps {
  card: ICard
}

export default function CardInfo({ card }: CardInfoProps) {
  return (
    <div className='w-full bg-sky-900 my-4 p-4 border-y-2 border-white shadow-2xl space-y-2'>
      <h1 className='text-xl font-semibold text-left mb-0'>{card.name}</h1>
      {card.cardType === 'Monster' && <MonsterCardInfo card={card} />}
      {card.cardType === 'Spell' && <SpellCardInfo card={card} />}
      {card.cardType === 'Trap' && <TrapCardInfo card={card} />}
    </div>
  )
}
