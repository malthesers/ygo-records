import { IPlayer } from '@/interfaces/player'
import Link from 'next/link'

interface PlayerCellProps {
  player: IPlayer
  player3?: IPlayer
  player2?: IPlayer
}

export default function PlayerCell({ player, player2, player3 }: PlayerCellProps) {
  return player.name === 'Unknown' ? (
    <td className='*:block *:text-lg'>
      <p>{player.name}</p>
      {player2 && <p>{player2.name}</p>}
      {player3 && <p>{player3.name}</p>}
    </td>
  ) : (
    <td className='*:block'>
      <Link href={`/players/${player.slug}`}>{player.name}</Link>
      {player2 && <Link href={`/players/${player2.slug}`}>{player2.name}</Link>}
      {player3 && <Link href={`/players/${player3.slug}`}>{player3.name}</Link>}
    </td>
  )
}
