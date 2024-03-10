import { IEvent } from '@/interfaces/event'
import Image from 'next/image'
import Link from 'next/link'

interface RecentEventCardProps {
  event: IEvent
}

export default function RecentEventCard({ event }: RecentEventCardProps) {
  return (
    // <article className='bg-sky-900 flex flex-row justify-between p-2'>
    //   <div>
    //     <p className='font-semibold'>{event.eventType.name}</p>
    //     <p>
    //       {event.name} {event.year}
    //     </p>
    //   </div>
    //   <div className='relative'>
    //     <Image src={`/images/logos/${event.eventType.slug}.png`} alt='event logo' width={60} height={10}></Image>
    //   </div>
    // </article>
    <Link href='/' className='no-underline'>
      <article className='bg-sky-900 p-2 text-center grid grid-cols-1 grid-rows-1 *:grid-center shadow-2xl duration-200 hover:bg-sky-950'>
        <div className='relative opacity-30'>
          <Image
            className='object-cover w-1/3 m-auto'
            src={`/images/logos/${event.type.slug}.png`}
            alt='event logo'
            width={150}
            height={150}
          ></Image>
        </div>
        <div className='z-10 flex flex-col justify-center'>
          <p className='font-semibold'>{event.name}</p>
          <p>{event.winner.name}</p>
          <p>{event.winner.deck.name}</p>
        </div>
      </article>
    </Link>
  )
}
