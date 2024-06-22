import { Rank } from '@/interfaces/card/monster'
import CardInfoBoxTemplate from './CardInfoBox'
import rankStar from '~/images/frame-assets/rank.webp'
import Image from 'next/image'

interface CardInfoRankProps {
  rank: Rank
}

export default function CardInfoRank({ rank }: CardInfoRankProps) {
  return (
    <CardInfoBoxTemplate property='Rank'>
      <div className='flex flex-row gap-2 items-center'>
        <Image src={rankStar} alt='Level icon' width={16} className='size-4' />
        <p>{rank}</p>
      </div>
    </CardInfoBoxTemplate>
  )
}
