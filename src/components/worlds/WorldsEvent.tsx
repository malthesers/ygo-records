import { Event } from "@/interfaces/event";

export default function WorldsEvent({ event }: { event: Event}) {
  return (
    <tr>
      <td>{event.year}</td>
      <td>{event.winner.nationality}</td>
      <td>{event.winner.name}</td>
      <td>{event.winner.deck}</td>
    </tr>
  )
}