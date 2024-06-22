import CardInfoBox from './CardInfoBox'
import { MonsterType } from '@/interfaces/card/monster'

interface CardInfoMonsterTypeProps {
  type: MonsterType
}

export default function CardInfoMonsterType({ type }: CardInfoMonsterTypeProps) {
  return (
    <CardInfoBox property='Type'>
      <p>{type}</p>
    </CardInfoBox>
  )
}
