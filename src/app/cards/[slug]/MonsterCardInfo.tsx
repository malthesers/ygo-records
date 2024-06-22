import { ICard } from '@/interfaces/card'
import CardInfoBox from './card-info-box'

interface MonsterCardInfoProps {
  card: ICard
}

export default function MonsterCardInfo({ card }: MonsterCardInfoProps) {
  if (card.cardType !== 'Monster') return null

  const isXyz = card.monsterCardType === 'Xyz'
  const isLink = card.monsterCardType === 'Link'

  return (
    <div className='space-y-2'>
      <CardInfoBox.Description property='Card text' description={card.description} />
      {card.pendulum && <CardInfoBox.Description property='Pendulum text' description={card.pendulum.description} />}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2'>
        <CardInfoBox.CardType cardType={card.cardType} />
        <CardInfoBox.MonsterCardType monsterCardType={card.monsterCardType} />
        <CardInfoBox.MonsterType type={card.type} />
        <CardInfoBox.Attribute attribute={card.attribute} />
        {!isLink && !isXyz && <CardInfoBox.Level level={card.level} />}
        {isLink && <CardInfoBox.Rating rating={card.rating} />}
        {isXyz && <CardInfoBox.Rank rank={card.rank} />}
        {card.pendulum && <CardInfoBox.Scale scale={card.pendulum.scale} />}
        <CardInfoBox.ATK atk={card.atk} />
        {!isLink && <CardInfoBox.DEF def={card.def} />}
      </div>
    </div>
  )
}
