import { Event } from "@/interfaces/event";

export default function WorldsEvent({ event }: { event: Event}) {
  return (
    <div className="grid grid-cols-4">
      <p>{event.year}</p>
      <p>{event.winner.nationality}</p>
      <p>{event.winner.name}</p>
      <p>{event.winner.deck}</p>
    </div>
  )
}