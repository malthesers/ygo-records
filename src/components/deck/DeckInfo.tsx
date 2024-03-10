import { IDeck } from '@/interfaces/deck'
import Image from 'next/image'
import Link from 'next/link'

interface DeckInfoProps {
  deck: IDeck
}

export default function DeckInfo({ deck }: DeckInfoProps) {
  return (
    <section className='relative min-h-40 p-0 grid grid-cols-1 grid-rows-1 *:grid-center'>
      <Image
        className='-z-10 object-cover'
        src={`/images/placeholders/${deck?.thumbnail}`}
        alt={`${deck?.name} splash image`}
        priority
        fill
      />
      <div className='size-full bg-black/60 backdrop-blur-sm p-4'>
        <div className='z-10 p-4 flex flex-col gap-2 items-center border-white border-4'>
          <h1 className='mb-2 font-semibold'>{deck?.name}</h1>
          <div className='flex flex-row gap-2 justify-center'>
            <Link href='/'>{deck?.archetype}</Link>
            {deck.engine?.map((engine) => (
              <Link href='/'>{engine}</Link>
            ))}
          </div>
          <div className='flex flex-row gap-1'>
            <span className='font-semibold'>{deck.place}</span>
            <span>at</span>
            <Link href='/'>{deck.event.name}</Link>
          </div>
          <div className='flex flex-row gap-1'>
            <span>Piloted by</span>
            <Link href='/'>{deck.player.name}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
