import { ITopDeck } from '@/interfaces/deck'
import Image from 'next/image'
import Link from 'next/link'

interface TopDeckCardProps {
  topDeck: ITopDeck
}

export default function TopDeckCard({ topDeck }: TopDeckCardProps) {
  return (
    <>
      <article className='bg-sky-900 max-w-[30rem] w-full mx-auto grid grid-cols-[1fr_2fr] shadow-2xl'>
        <div className='relative'>
          <Image
            priority
            src={`/images/placeholders/${topDeck.thumbnail}`}
            alt={topDeck.name}
            width={350}
            height={350}
            className='size-full object-cover'
          />
        </div>
        <div className='flex flex-col'>
          <div className='py-1 px-2 duration-200 hover:bg-sky-950'>
            <p className='text-lg font-semibold'>
              <span>{topDeck.id}. </span>
              <span>{topDeck.name}</span>
            </p>
            <p>
              <span className='text-sm'>{topDeck.topCutPercentage}%</span>
              <span className='text-xs'> of recent events</span>
            </p>
          </div>
          <hr className='border-white/50'></hr>
          <Link href='/decks/1' className='h-full py-1 px-2 no-underline duration-200 hover:bg-sky-950'>
            <p className='text-xs italic'>Most succesful decklist</p>
            <p className='text-sm'>1st Place TEAM YCS Las Vegas</p>
            <p className='text-sm'>Pakawat Pamornsut</p>
          </Link>
        </div>
      </article>
    </>
  )
}
