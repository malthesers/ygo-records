import S3CardArtwork from '@/components/layout/S3CardArtwork'
import { IDeck } from '@/interfaces/deck'
import formatPlacement from '@/services/formatPlacement'
import Link from 'next/link'

interface DecklistInfoProps {
  deck: IDeck
}

export default function DecklistInfo({ deck }: DecklistInfoProps) {
  return (
    <section className='relative min-h-[15rem] p-0 grid grid-cols-1 grid-rows-1 *:grid-center'>
      <S3CardArtwork
        passcode={deck.deckType.thumbnail}
        alt={`${deck.deckType.name} splash image`}
        className='-z-10 object-cover'
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
          <p className='text-lg'>
            <span className='font-semibold'>{formatPlacement(deck.placement)}</span>
            <span> at </span>
            <Link href={`/events/${deck.event.type.slug}/${deck.event.slug}`}>{deck.event.name}</Link>
          </p>
          <p className='text-lg'>
            <span>Piloted by </span>
            <Link href={`/players/${deck.player.slug}`}>{deck.player.name}</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
