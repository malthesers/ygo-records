'use client'

import { IDeck } from '@/interfaces/deck'
import DeckRow from './DeckRow'

interface DeckTableProps {
  decks: IDeck[]
}

export default function DeckTable({ decks }: DeckTableProps) {
  const duplicatedData = Array.from({ length: 10 }, () => decks).flat()

  return (
    <section>
      <table className='w-full'>
        <thead className='hidden md:table-header-group border-b-2 border-white'>
          <tr>
            <th>Date</th>
            <th>Tournament</th>
            <th>Placement</th>
            <th>Deck</th>
          </tr>
        </thead>
        <tbody>
          {duplicatedData?.map((deck, index) => (
            <DeckRow key={index} deck={deck} />
          ))}
        </tbody>
      </table>
    </section>
  )
}
