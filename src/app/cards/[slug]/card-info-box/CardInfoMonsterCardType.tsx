import CardInfoBox from './CardInfoBox'
import { MonsterCardType } from '@/interfaces/card/monster'

interface CardInfoMonsterCardTypeProps {
  monsterCardType: MonsterCardType
}

export default function CardInfoMonsterCardType({ monsterCardType }: CardInfoMonsterCardTypeProps) {
  return (
    <CardInfoBox property='Monster type'>
      <p>{monsterCardType}</p>
    </CardInfoBox>
  )
}
