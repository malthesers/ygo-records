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
    //     <p className='font-semibold'>{event.type.name}</p>
    //     <p>
    //       {event.name} {event.year}
    //     </p>
    //   </div>
    //   <div className='relative'>
    //     <Image src={`/images/logos/${event.type.slug}.png`} alt='event logo' width={60} height={10}></Image>
    //   </div>
    // </article>
    // <Link href={`/events/${deck.event.type.slug}/${deck.event.slug}`} className='no-underline'>
    //   <article className='bg-sky-900 p-2 text-center grid grid-cols-1 grid-rows-1 *:grid-center shadow-2xl duration-200 hover:bg-sky-950'>
    //     <div className='relative opacity-30'>
    //       <Image
    //         className='object-cover w-1/3 m-auto'
    //         src={`/images/logos/${event.type.slug}.png`}
    //         alt='event logo'
    //         width={150}
    //         height={150}
    //       ></Image>
    //     </div>
    //     <div className='z-10 flex flex-col justify-center'>
    //       <p className='font-semibold'>{event.name}</p>
    //       <p>{event.winner.name}</p>
    //       <p>{event.winner.deck.name}</p>
    //     </div>
    //   </article>
    // </Link>
    <Link href={`/events/${event.type.slug}/${event.slug}`} className='no-underline'>
      <article className='w-full max-w-[30rem] mx-auto grid grid-cols-12 grid-rows-7 pr-4 sm:pr-0 text-center'>
        <Image
          className='col-start-1 col-end-6 row-start-1 row-end-8 z-10 object-cover w-32 m-auto'
          src={`/images/logos/${event.type.slug}.png`}
          alt='event logo'
          width={120}
          height={120}
        />
        <div className='bg-sky-900 p-2 pl-12 col-start-4 col-end-13 row-start-2 row-end-7 flex flex-col justify-center'>
          {/* <p className='font-semibold'>{event.type.name}</p> */}
          <p>{event.location}</p>
          <p>
            {event.date}, {event.year}
          </p>
        </div>
      </article>
    </Link>
  )
}
