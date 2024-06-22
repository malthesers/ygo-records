import CardInfoBoxTemplate from './CardInfoBox'
import { Rank } from '@/interfaces/card/monster'

interface CardInfoRankProps {
  rank: Rank
}

export default function CardInfoRank({ rank }: CardInfoRankProps) {
  return (
    <CardInfoBoxTemplate property='Rank'>
      <p>{rank}</p>
    </CardInfoBoxTemplate>
  )
}
