import { IDeck } from '@/interfaces/deck'
import Link from 'next/link'

interface DeckCellProps {
  deck: IDeck
  deck2?: IDeck
  deck3?: IDeck
}

export default function DeckCell({ deck, deck2, deck3 }: DeckCellProps) {
  return deck.deckType.name === 'Unknown' ? (
    <td className='*:block *:text-lg'>
      <p>{deck.deckType.name}</p>
      {deck2?.deckType?.name && <p>{deck2.deckType.name}</p>}
      {deck3?.deckType?.name && <p>{deck3.deckType.name}</p>}
    </td>
  ) : (
    <td className='*:block'>
      <Link href={`/decks/lists/${deck._id}`}>{deck.deckType.name}</Link>
      {deck2?.deckType?.name && <Link href={`/decks/lists/${deck2._id}`}>{deck2.deckType.name}</Link>}
      {deck3?.deckType?.name && <Link href={`/decks/lists/${deck3._id}`}>{deck3.deckType.name}</Link>}
    </td>
  )
}
