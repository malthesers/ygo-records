import { ITopDeckType } from '@/interfaces/deck'
import Image from 'next/image'
import MostSuccesfulBox from './MostSuccesfulBox'
import DeckPerformanceBox from './DeckPerformanceBox'
import S3CardArtwork from '@/components/layout/S3CardArtwork'

interface TopDeckCardProps {
  topDeck: ITopDeckType
}

export default function TopDeckCard({ topDeck }: TopDeckCardProps) {
  return (
    <article className='bg-sky-900 max-w-[30rem] w-full mx-auto grid grid-cols-[1fr_2fr] shadow-2xl'>
      <div className='relative'>
        <S3CardArtwork
          passcode={topDeck.thumbnail}
          alt={topDeck.name}
          width={160}
          height={160}
          priority
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
