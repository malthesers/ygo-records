import { IDeck } from '@/interfaces/deck'
import Image from 'next/image'

interface TopDeckCardProps {
  topDeck: IDeck
}

export default function TopDeckCard({ topDeck }: TopDeckCardProps) {
  return (
    <article className='grid grid-cols-1 grid-rows-1 *:grid-center group'>
      <div className='-z-10 relative aspect-square'>
        <Image
          priority
          src={`/images/placeholders/${topDeck.thumbnail}`}
          alt={topDeck.name}
          fill
          sizes='(max-width: 350px)'
        />
      </div>
      <div className='bg-black/80 max-h-min mt-auto p-4 duration-200 group-hover:max-h-full'>
        <p className='text-center'>{topDeck.name}</p>
      </div>
    </article>
  )
}
