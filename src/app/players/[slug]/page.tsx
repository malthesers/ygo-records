'use client'

import { useEffect, useState } from 'react'
import PlayerInfo from '@/components/players/PlayerInfo'
import { IPlayer } from '@/interfaces/player'
import { testPlayer } from '@/app/data/test-player'

export default function PlayerPage({ params }: { params: { slug: number } }) {
  const [player, setPlayer] = useState<IPlayer | null>()

  useEffect(() => {
    setPlayer(testPlayer)
  }, [params.slug])

  return (
    <main className='space-y-4'>
      {player && <PlayerInfo player={player} />}
      <section className='bg-sky-800 grid md:grid-cols-2 gap-4'></section>
    </main>
  )
}
