import CardInfoBoxTemplate from './CardInfoBox'
import { Rating } from '@/interfaces/card/monster'

interface CardInfoRatingProps {
  rating: Rating
}

export default function CardInfoRating({ rating }: CardInfoRatingProps) {
  return (
    <CardInfoBoxTemplate property='Rating'>
      <p>{rating}</p>
    </CardInfoBoxTemplate>
  )
}
