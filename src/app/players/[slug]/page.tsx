import { IPlayer } from '@/interfaces/player'
import PlayerInfo from './PlayerInfo'
import DeckTable from '../../../components/tables/DeckTable'
import getData from '@/services/getData'

export default async function PlayerPage({ params }: { params: { slug: number } }) {
  const player = await getData<IPlayer>(`players/${params.slug}`)

  return (
    <main className='space-y-4'>
      {player && <PlayerInfo player={player} />}
      {player.decks && <DeckTable decks={player.decks} showEvent showDeck showEngines />}
    </main>
  )
}
