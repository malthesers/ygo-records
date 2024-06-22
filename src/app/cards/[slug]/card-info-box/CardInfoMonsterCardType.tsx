import CardInfoBoxTemplate from './CardInfoBox'
import { MonsterCardType } from '@/interfaces/card/monster'

interface CardInfoMonsterCardTypeProps {
  monsterCardType: MonsterCardType
}

export default function CardInfoMonsterCardType({ monsterCardType }: CardInfoMonsterCardTypeProps) {
  return (
    <CardInfoBoxTemplate property='Monster type'>
      <p>{monsterCardType}</p>
    </CardInfoBoxTemplate>
  )
}
