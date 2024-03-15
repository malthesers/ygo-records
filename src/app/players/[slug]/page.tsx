'use client'

import { useEffect, useState } from 'react'
import PlayerInfo from '@/components/players/PlayerInfo'
import { IPlayer } from '@/interfaces/player'
import { testPlayer } from '@/app/data/test-player'
import DeckTable from '@/components/players/DeckTable'
import { IDeck } from '@/interfaces/deck'
import { testDeck } from '@/app/data/test-deck'

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
