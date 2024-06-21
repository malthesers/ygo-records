import TournamentTable from '@/components/tables/TournamentTable'
import { IEvent } from '@/interfaces/event'
import getData from '@/services/getData'

export default async function EventsPage() {
  const events = await getData<IEvent[]>('events')

  console.log(events)

  return (
    <main>
      <h1>Events</h1>
      {events && <TournamentTable events={events} />}
    </main>
  )
}
