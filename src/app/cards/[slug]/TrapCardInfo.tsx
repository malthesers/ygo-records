import { ICard } from '@/interfaces/card'
import CardInfo from './card-info-box'

interface TrapCardInfoProps {
  card: ICard
}

export default function TrapCardInfo({ card }: TrapCardInfoProps) {
  if (card.cardType !== 'Trap') return

  return (
    <div className='space-y-2'>
      <CardInfo.Description property='Trap effect' description={card.description} />
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2'>
        <CardInfo.CardType cardType={card.cardType} />
        <CardInfo.TrapType type={card.type} />
      </div>
    </div>
  )
}
