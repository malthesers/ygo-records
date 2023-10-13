import { Event } from "@/interfaces/event";

export default function WorldsEvent({ event }: { event: Event}) {
  return (
    <div>
      <p>{event.year}</p>
      <p>{event.winner.nationality}</p>
      <p>{event.winner.name}</p>
      <p>{event.winner.deck}</p>
    </div>
  )
}