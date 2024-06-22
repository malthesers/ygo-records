import { IMonsterCard } from '@/interfaces/card/monster'
import CardInfoDescription from './CardInfoDescription'

interface CardInfoPendulumEffectProps {
  card: IMonsterCard
}

export default function CardInfoPendulumEffect({ card }: CardInfoPendulumEffectProps) {
  if (!card.pendulum?.description) return null

  return <CardInfoDescription property='Pendulum effect' description={card.pendulum.description} />
}
