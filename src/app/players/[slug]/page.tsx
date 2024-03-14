'use client'

import { useEffect, useState } from 'react'
import PlayerInfo from '@/components/players/PlayerInfo'
import { IPlayer } from '@/interfaces/player'

export default function PlayerPage({ params }: { params: { slug: number } }) {
  const [player, setPlayer] = useState<IPlayer | null>()

  useEffect(() => {
    // setPlayer()
  }, [params.slug])

  return (
    <main className='space-y-4'>
      {player && <PlayerInfo />}
      <section className='bg-sky-800 grid md:grid-cols-2 gap-4'></section>
    </main>
  )
}
