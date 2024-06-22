import CardInfoBoxTemplate from './CardInfoBox'
import { MonsterType } from '@/interfaces/card/monster'

interface CardInfoMonsterTypeProps {
  type: MonsterType
}

export default function CardInfoMonsterType({ type }: CardInfoMonsterTypeProps) {
  return (
    <CardInfoBoxTemplate property='Type'>
      <p>{type}</p>
    </CardInfoBoxTemplate>
  )
}
