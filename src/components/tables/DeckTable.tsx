'use client'

import { IDeck } from '@/interfaces/deck'
import Link from 'next/link'

interface DeckTableProps {
  decks: IDeck[]
}

export default function DeckTable({ decks }: DeckTableProps) {
  const duplicatedData = Array.from({ length: 10 }, () => decks).flat()
  const placements = {
    '1': '1st',
    '2': '2nd',
    '4': 'Top 4',
    '8': 'Top 8',
    '16': 'Top 16',
    '32': 'Top 32',
    '64': 'Top 64',
    '128': 'Top 128',
  }

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Tournament</th>
            <th>Placement</th>
            <th>Deck</th>
          </tr>
        </thead>
        <tbody>
          {duplicatedData?.map((deck, index) => (
            <tr key={index}>
              <td className='hidden md:table-cell'>{deck.event.date}</td>
              <td className='text-xl font-semibold md:text-lg md:font-normal'>
                <Link href='/'>{deck.event.name}</Link>
              </td>
              <td>{placements[deck.placement]}</td>
              <td className='*:block'>
                <Link href='/decks/lists/0'>{deck.deckType.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
