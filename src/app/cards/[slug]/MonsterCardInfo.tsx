import { ICard } from '@/interfaces/card'
import CardInfoDescription from './card-info-box/CardInfoDescription'
import CardInfoAttribute from './card-info-box/CardInfoAttribute'
import CardInfoCardType from './card-info-box/CardInfoCardType'
import CardInfoMonsterType from './card-info-box/CardInfoMonsterType'
import CardInfoMonsterCardType from './card-info-box/CardInfoMonsterCardType'
import CardInfoATK from './card-info-box/CardInfoATK'
import CardInfoDEF from './card-info-box/CardInfoDEF'

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
        <CardInfoCardType cardType={card.cardType} />
        <CardInfoMonsterCardType monsterCardType={card.monsterCardType} />
        <CardInfoMonsterType type={card.type} />
        <CardInfoAttribute attribute={card.attribute} />
        <CardInfoATK atk={card.atk} />
        {!isLink && <CardInfoDEF def={card.def} />}
      </div>
    </div>
  )
}
