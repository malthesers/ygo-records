import { IDeck } from '@/interfaces/deck'
import Link from 'next/link'

interface DeckRowProps {
  deck: IDeck
}

export default function DeckRow({ deck }: DeckRowProps) {
  return (
    <tr className='grid md:table-row text-center'>
      <td className='hidden md:table-cell'>{deck.event.date}</td>
      <td className='text-xl font-semibold md:text-lg md:font-normal'>
        <Link href='/'>{deck.event.name}</Link>
      </td>
      <td>{deck.place}</td>
      <td className='*:block'>
        <Link href='/decks/0'>{deck.name}</Link>
      </td>
    </tr>
  )
}
