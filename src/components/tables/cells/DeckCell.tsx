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
      <Link href={`/players/${deckType.slug}`}>{deckType.name}</Link>
      {deckType2 && <Link href={`/decks/${deckType2.slug}`}>{deckType2.name}</Link>}
      {deckType3 && <Link href={`/decks/${deckType3.slug}`}>{deckType3.name}</Link>}
    </td>
  )
}
