import { IEvent } from '@/interfaces/event'
import formatDate from '@/services/formatDate'
import Image from 'next/image'

interface EventInfoProps {
  event: IEvent
}

export default function EventInfo({ event }: EventInfoProps) {
  console.log(event.startDate, event.endDate)

  return (
    <section className='relative min-h-[20rem] p-0 grid grid-cols-1 grid-rows-1 *:grid-center'>
      <Image
        className='-z-10 object-cover'
        src={`/images/locations/${event.thumbnail}.jpg`}
        alt={`${event.name} splash image`}
        priority
        fill
      />
      <div className='size-full bg-black/60 backdrop-blur-[2px] p-4'>
        <div className='z-10 size-full p-4 flex flex-col gap-2 items-center justify-center border-white border-4'>
          <h1 className='mb-2 font-semibold'>{event?.name}</h1>
          <div className='flex gap-4'>
            <p>Attendance: {event.attendance}</p>
            <p>{formatDate(event.startDate, event.endDate)}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
