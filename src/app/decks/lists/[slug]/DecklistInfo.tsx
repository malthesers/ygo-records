import { IDeck } from '@/interfaces/deck'
import Image from 'next/image'
import Link from 'next/link'

interface DecklistInfoProps {
  deck: IDeck
}

export default function DecklistInfo({ deck }: DecklistInfoProps) {
  return (
    <section className='relative min-h-[15rem] p-0 grid grid-cols-1 grid-rows-1 *:grid-center'>
      <Image
        className='-z-10 object-cover'
        src={`/images/placeholders/${deck?.deckType.thumbnail}`}
        alt={`${deck?.deckType.name} splash image`}
        priority
        fill
      />
      <div className='size-full bg-black/60 backdrop-blur-[2px] p-4'>
        <div className='z-10 size-full p-4 flex flex-col gap-2 items-center justify-center border-white border-4'>
          <h1 className='mb-2 font-semibold'>{deck?.deckType.name}</h1>
          <div className='flex flex-row gap-2 justify-center'>
            {deck.deckType.engines?.map((engine) => (
              <Link key={engine} href='/'>
                {engine}
              </Link>
            ))}
          </div>
          <div className='flex flex-row gap-1'>
            <span className='font-semibold'>{deck.placement}</span>
            <span>at</span>
            <Link href='/'>{deck.event.name}</Link>
          </div>
          <div className='flex flex-row gap-1'>
            <span>Piloted by</span>
            <Link href='/players/0'>{deck.player.name}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
