import TextBanner from '@/components/TextBanner'
import TournamentTable from '@/components/tables/TournamentTable'
import { IEvent } from '@/interfaces/event'
import getData from '@/services/getData'
import EventTypesBanner from './EventTypesBanner'
import eventInfo, { eventTypes } from '../data/eventInfo'
import Image from 'next/image'
import EventsBanner from './EventsBanner'

export default async function EventsPage() {
  const events = await getData<IEvent[]>('events')

  return (
    <main>
      <EventsBanner />
      {/* <EventTypesBanner /> */}
      {events && <TournamentTable events={events} />}
    </main>
  )
}
