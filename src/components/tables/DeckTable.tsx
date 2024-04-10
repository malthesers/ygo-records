'use client'

import { IDeck } from '@/interfaces/deck'
import formatPlacement from '@/services/formatPlacement'
import Link from 'next/link'

interface DeckTableProps {
  decks: IDeck[]
}

export default function DeckTable({ decks }: DeckTableProps) {
  const duplicatedData = Array.from({ length: 10 }, () => decks).flat()

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
              <td>{formatPlacement(deck.placement)}</td>
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
