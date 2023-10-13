
import { Event } from "@/interfaces/event";
import Link from "next/link";

export default function WorldsEvent({ event }: { event: Event}) {
  return (
    <tr>
      <td>
        <Link href={`worlds/${event.year}`}>{event.year}</Link>
      </td>
      <td>{event.winner.nationality}</td>
      <td>{event.winner.name}</td>
      <td>{event.winner.deck}</td>
    </tr>
  )
}