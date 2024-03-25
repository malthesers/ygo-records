'use client'

import { testPlayer } from '@/app/data/test-player'
import { testDeck } from '@/app/data/test-deck'
import { useEffect, useState } from 'react'
import { IPlayer } from '@/interfaces/player'
import { IDeck } from '@/interfaces/deck'
import PlayerInfo from './PlayerInfo'
import DeckTable from './DeckTable'

export default function PlayerPage({ params }: { params: { slug: number } }) {
  const [player, setPlayer] = useState<IPlayer | null>()
  const [decks, setDecks] = useState<IDeck[] | null>()

  useEffect(() => {
    setPlayer(testPlayer)
    setDecks([testDeck])
  }, [params.slug])

  return (
    <main className='space-y-4'>
      {player && <PlayerInfo player={player} />}
      {decks && <DeckTable decks={decks} />}
    </main>
  )
}
