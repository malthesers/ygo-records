import { IDeckType } from '@/interfaces/deck'
import Link from 'next/link'

interface DeckCellProps {
  deckType: IDeckType
  deckType2?: IDeckType
  deckType3?: IDeckType
}

export default function DeckCell({ deckType, deckType2, deckType3 }: DeckCellProps) {
  return (
    <td className='*:block'>
      <Link href={`/decks/lists/${deckType._id}`}>{deckType.name}</Link>
      {deckType2 && <Link href={`/decks/lists/${deckType2._id}`}>{deckType2.name}</Link>}
      {deckType3 && <Link href={`/decks/lists/${deckType3._id}`}>{deckType3.name}</Link>}
    </td>
  )
}
