import TextBanner from '@/components/TextBanner'
import { IPlayer } from '@/interfaces/player'
import getData from '@/services/getData'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Players | YGO Records',
  description: 'YGO Records | Yu-Gi-Oh! players page.',
  keywords: ['Yu-Gi-Oh!', 'Yugioh', 'players'],
  openGraph: {
    title: 'Players | YGO Records',
    description: 'YGO Records | Yu-Gi-Oh! players page.',
  },
}

export default async function PlayersPage() {
  const players = await getData<IPlayer[]>('/players')

  return (
    <main>
      <TextBanner>
        <h1>Players</h1>
      </TextBanner>
      <section>
        {players.map((player) => (
          <p key={player.slug}>{player.name}</p>
        ))}
      </section>
    </main>
  )
}
