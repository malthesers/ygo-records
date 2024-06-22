import { ICard } from '@/interfaces/card'
import CardInfo from './card-info-box'

interface SpellCardInfoProps {
  card: ICard
}

export default function SpellCardInfo({ card }: SpellCardInfoProps) {
  if (card.cardType !== 'Spell') return

  return (
    <div className='space-y-2'>
      <CardInfo.Description property='Spell effect' description={card.description} />
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2'>
        <CardInfo.CardType cardType={card.cardType} />
        <CardInfo.SpellType type={card.type} />
      </div>
    </div>
  )
}
