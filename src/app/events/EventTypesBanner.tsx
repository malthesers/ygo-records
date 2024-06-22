import LogoBanner from '@/components/LogoBanner'
import eventInfo, { eventTypes } from '../data/eventInfo'

export default function EventTypesBanner() {
  return (
    <section className='p-0 grid md:grid-cols-4 gap-4'>
      {eventTypes.map((key) => (
        <LogoBanner
          key={key}
          splash={eventInfo[key].splash}
          logo={eventInfo[key].logo}
          alt='Yu-Gi-Oh! Championship Series'
          clear={key === 'remote-ycs'}
        />
      ))}
    </section>
  )
}
