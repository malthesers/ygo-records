import { CardType } from '@/interfaces/card'
import CardInfoBoxTemplate from './CardInfoBox'

interface CardInfoCardTypeProps {
  cardType: CardType
}

export default function CardInfoCardType({ cardType }: CardInfoCardTypeProps) {
  return (
    <CardInfoBoxTemplate property='Card type'>
      <p>{cardType}</p>
    </CardInfoBoxTemplate>
  )
}
