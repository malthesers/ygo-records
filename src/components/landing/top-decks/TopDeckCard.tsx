import { ITopDeckType } from '@/interfaces/deck'
import formatPlacement from '@/services/formatPlacement'
import Image from 'next/image'
import Link from 'next/link'

interface TopDeckCardProps {
  topDeck: ITopDeckType
}

export default function TopDeckCard({ topDeck }: TopDeckCardProps) {
  return (
    <article className='bg-sky-900 max-w-[30rem] w-full mx-auto grid grid-cols-[1fr_2fr] shadow-2xl'>
      <div className='relative'>
        <Image
          priority
          src={`/images/placeholders/${topDeck.thumbnail}.jpg`}
          alt={topDeck.name}
          width={350}
          height={350}
          className='size-full object-cover'
        />
      </div>
      <div className='flex flex-col'>
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
        <hr className='border-white/50'></hr>
        <Link
          href={`/decks/lists/${topDeck.bestPerformance._id}`}
          className='h-full py-1 px-2 no-underline duration-200 hover:bg-sky-950'
        >
          <p className='text-xs italic'>Most succesful decklist</p>
          <p className='text-sm'>
            <span>{formatPlacement(topDeck.bestPerformance.placement)}</span>
            <span> at {topDeck.bestPerformance.event}</span>
          </p>
          <p className='text-sm'>{topDeck.bestPerformance.player}</p>
        </Link>
      </div>
    </article>
  )
}
