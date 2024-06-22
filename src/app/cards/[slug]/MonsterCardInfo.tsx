import { ICard } from '@/interfaces/card'
import CardInfoDescription from './card-info-box/CardInfoDescription'
import CardInfoAttribute from './card-info-box/CardInfoAttribute'
import CardInfoType from './card-info-box/CardInfoCardType'

interface MonsterCardInfoProps {
  card: ICard
}

export default function MonsterCardInfo({ card }: MonsterCardInfoProps) {
  if (card.cardType !== 'Monster') return

  const isPendulum = card.pendulum
  const isLink = card.monsterCardType === 'Link'

  return (
    <div className='space-y-2'>
      <CardInfoDescription description={card.description} />
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2'>
        <CardInfoType cardType={card.cardType} />
        <CardInfoAttribute attribute={card.attribute} />
      </div>
    </div>
  )
}
