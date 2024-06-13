import { ITopDeckType } from '@/interfaces/deck'
import Image from 'next/image'
import MostSuccesfulBox from './MostSuccesfulBox'
import DeckPerformanceBox from './DeckPerformanceBox'

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
        <DeckPerformanceBox topDeck={topDeck} />
        <hr className='border-white/50'></hr>
        <MostSuccesfulBox mostSuccesful={topDeck.mostSuccessful} />
      </div>
    </article>
  )
}
