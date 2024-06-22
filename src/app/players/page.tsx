import TextBanner from '@/components/TextBanner'
import { IPlayer } from '@/interfaces/player'
import getData from '@/services/getData'

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
