import { ITopDeckType } from '@/interfaces/deck'
import Link from 'next/link'

interface IDeckPerformanceBoxProps {
  topDeck: ITopDeckType
}

export default function DeckPerformanceBox({ topDeck }: IDeckPerformanceBoxProps) {
  return (
    <Link href={'/decks/' + topDeck.slug} className='py-1 px-2 no-underline duration-200 hover:bg-sky-950'>
      <p className='text-lg font-semibold'>
        <span>{topDeck.rank}. </span>
        <span>{topDeck.name}</span>
      </p>
      <p>
        <span className='text-sm'>{topDeck.percentage}%</span>
        <span className='text-xs'> of recent events</span>
      </p>
    </Link>
  )
}
