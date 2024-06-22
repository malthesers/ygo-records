import TextBanner from '@/components/TextBanner'
import Image from 'next/image'
import eventInfo, { eventTypes } from '../data/eventInfo'
import Link from 'next/link'

export default function EventsBanner() {
  return (
    <TextBanner>
      <h1 className='mb-2 font-semibold'>Most Recent Events</h1>
      <p className='text-lg text-center font-semibold'>Events and their winners sorted by recency.</p>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {eventTypes.map((key) => (
          <Link key={key} href={`/events/${key}`} className='grid place-content-center'>
            <Image key={key} src={eventInfo[key].logo} alt={eventInfo[key].title} className='w-36' />
          </Link>
        ))}
      </div>
    </TextBanner>
  )
}
