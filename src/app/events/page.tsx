import TournamentTable from '@/components/tables/TournamentTable'
import { IEvent } from '@/interfaces/event'
import getData from '@/services/getData'
import EventsBanner from './EventsBanner'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events | YGO Records',
  description: 'YGO Records | Yu-Gi-Oh! events page - WCQ, YCS, TEAM YCS and Remote YCS.',
  keywords: ['Yu-Gi-Oh!', 'Yugioh', 'events'],
  openGraph: {
    title: 'Events | YGO Records',
    description: 'YGO Records | Yu-Gi-Oh! events page - WCQ, YCS, TEAM YCS and Remote YCS.',
  },
}

export default async function EventsPage() {
  const events = await getData<IEvent[]>('events')

  return (
    <main>
      <EventsBanner />
      {events && <TournamentTable events={events} />}
    </main>
  )
}
