import { CardType } from '@/interfaces/card'
import CardInfoBox from './CardInfoBox'

interface CardInfoCardTypeProps {
  cardType: CardType
}

export default function CardInfoCardType({ cardType }: CardInfoCardTypeProps) {
  return <CardInfoBox property='Card type'>{cardType}</CardInfoBox>
}
