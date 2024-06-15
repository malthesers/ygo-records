import { IEvent } from '@/interfaces/event'
import formatDate from '@/services/formatDate'
import Image from 'next/image'
import Link from 'next/link'

interface RecentEventCardProps {
  event: IEvent
}

export default function RecentEventCard({ event }: RecentEventCardProps) {
  return (
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
          <p>{event.location}</p>
          <p>{formatDate(event.startDate, event.endDate)}</p>
        </div>
      </article>
    </Link>
  )
}
