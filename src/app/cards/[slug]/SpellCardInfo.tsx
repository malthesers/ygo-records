import { ICard } from '@/interfaces/card'
import CardInfoDescription from './card-info-box/CardInfoDescription'
import CardInfoCardType from './card-info-box/CardInfoCardType'
import CardInfoSpellType from './card-info-box/CardInfoSpellType'

interface SpellCardInfoProps {
  card: ICard
}

export default function SpellCardInfo({ card }: SpellCardInfoProps) {
  if (card.cardType !== 'Spell') return

  return (
    <div className='space-y-2'>
      <CardInfoDescription property='Spell effect' description={card.description} />
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2'>
        <CardInfoCardType cardType={card.cardType} />
        <CardInfoSpellType type={card.type} />
      </div>
    </div>
  )
}
