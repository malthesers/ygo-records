import { ICard } from '@/interfaces/card'
import CardInfoDescription from './card-info-box/CardInfoDescription'
import CardInfoType from './card-info-box/CardInfoCardType'
import CardInfoTrapType from './card-info-box/CardInfoTrapType'

interface TrapCardInfoProps {
  card: ICard
}

export default function TrapCardInfo({ card }: TrapCardInfoProps) {
  if (card.cardType !== 'Trap') return

  return (
    <div className='space-y-2'>
      <CardInfoDescription description={card.description} />
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2'>
        <CardInfoType cardType={card.cardType} />
        <CardInfoTrapType trapType={card.type} />
      </div>
    </div>
  )
}
