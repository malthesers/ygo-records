import { IDeck } from '@/interfaces/deck'
import Image from 'next/image'

interface TopDeckCardProps {
  topDeck: IDeck
}

export default function TopDeckCard({ topDeck }: TopDeckCardProps) {
  return (
    <>
      <article className='bg-sky-900 grid grid-cols-[1fr_2fr] shadow-2xl'>
        <div className='relative aspect-square'>
          <Image
            priority
            src={`/images/placeholders/${topDeck.thumbnail}`}
            alt={topDeck.name}
            fill
            sizes='(max-width: 350px)'
          />
        </div>
        <div className='flex flex-col'>
          <div>
            <p className='py-1 px-2 font-semibold duration-200 hover:bg-sky-950'>
              <span>{topDeck.id}. </span>
              <span>{topDeck.name}</span>
            </p>
          </div>
          <hr></hr>
          <div className='h-full py-1 px-2 duration-200 hover:bg-sky-950'>
            <p className='text-xs'>Featured Decklist</p>
            <p className='text-sm'>1st Place TEAM YCS Las Vegas</p>
            <p className='text-sm'>Pakawat Pamornsut</p>
          </div>
        </div>
      </article>
    </>
    // <article className='grid grid-cols-1 grid-rows-1 *:grid-center group'>
    //   <div className='-z-10 relative aspect-square'>
    //     <Image
    //       priority
    //       src={`/images/placeholders/${topDeck.thumbnail}`}
    //       alt={topDeck.name}
    //       fill
    //       sizes='(max-width: 350px)'
    //     />
    //   </div>
    //   <div className='bg-black/80 max-h-min mt-auto p-4 duration-200 group-hover:max-h-full'>
    //     <p className='text-center'>{topDeck.name}</p>
    //   </div>
    // </article>
  )
}
