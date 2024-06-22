import CardInfoBoxTemplate from './CardInfoBox'
import { Atk } from '@/interfaces/card/monster'

interface CardInfoATKProps {
  atk: Atk
}

export default function CardInfoATK({ atk }: CardInfoATKProps) {
  return (
    <CardInfoBoxTemplate property='ATK'>
      <p>{atk}</p>
    </CardInfoBoxTemplate>
  )
}
