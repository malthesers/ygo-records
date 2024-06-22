import { ICard } from '@/interfaces/card'
import CardInfo from './card-info-box'

interface MonsterCardInfoProps {
  card: ICard
}

export default function MonsterCardInfo({ card }: MonsterCardInfoProps) {
  if (card.cardType !== 'Monster') return null

  const isXyz = card.monsterCardType === 'Xyz'
  const isLink = card.monsterCardType === 'Link'

  return (
    <div className='space-y-2'>
      <CardInfo.Description property='Card text' description={card.description} />
      {card.pendulum && <CardInfo.Description property='Pendulum text' description={card.pendulum.description} />}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2'>
        <CardInfo.CardType cardType={card.cardType} />
        <CardInfo.MonsterCardType monsterCardType={card.monsterCardType} />
        <CardInfo.MonsterType type={card.type} />
        <CardInfo.Attribute attribute={card.attribute} />
        {!isLink && !isXyz && <CardInfo.Level level={card.level} />}
        {isLink && <CardInfo.Rating rating={card.rating} />}
        {isXyz && <CardInfo.Rank rank={card.rank} />}
        {card.pendulum && <CardInfo.Scale scale={card.pendulum.scale} />}
        <CardInfo.ATK atk={card.atk} />
        {!isLink && <CardInfo.DEF def={card.def} />}
      </div>
    </div>
  )
}
