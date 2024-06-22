import { IMonsterCard } from '@/interfaces/card/monster'
import CardInfoDescription from './CardInfoDescription'

interface CardInfoMonsterEffectProps {
  card: IMonsterCard
}

export default function CardInfoMonsterEffect({ card }: CardInfoMonsterEffectProps) {
  const descriptionText = card.monsterCardType === 'Normal' ? 'Flavor text' : 'Monster effect'

  return <CardInfoDescription property={descriptionText} description={card.description} />
}
