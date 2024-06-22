import { IMonsterCard } from '@/interfaces/card/monster'
import CardInfoBoxTemplate from './CardInfoBox'

interface CardInfoScaleProps {
  card: IMonsterCard
}

export default function CardInfoScale({ card }: CardInfoScaleProps) {
  if (!card.pendulum?.scale) return null

  return (
    <CardInfoBoxTemplate property='Scale'>
      <p>{card.pendulum.scale}</p>
    </CardInfoBoxTemplate>
  )
}
