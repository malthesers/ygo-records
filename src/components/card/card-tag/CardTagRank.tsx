import { Rank } from '@/interfaces/card/monster'
import rankStar from '~/images/frame-assets/rank.webp'
import Image from 'next/image'

interface CardTagRankProps {
  rank: Rank
}

export default function CardTagRank({ rank }: CardTagRankProps) {
  return (
    <div
      className={
        (rank === 13 ? 'w-[84%] ' : 'w-[79%] ') +
        (rank === 12 ? 'justify-between' : '') +
        ' h-full mx-auto flex flex-row *:aspect-square'
      }
    >
      {Array.from({ length: rank }).map((_key, index) => (
        <Image src={rankStar} alt='rank icon' width={25} height={25} key={index} className='w-auto h-full' />
      ))}
    </div>
  )
}
