import { IWinner } from '@/interfaces/event'
import { IPlayer } from '@/interfaces/player'
import Link from 'next/link'

interface PlayerCellProps {
  player: IPlayer | IWinner
  player2?: IPlayer | IWinner
  player3?: IPlayer | IWinner
}

export default function PlayerCell({ player, player2, player3 }: PlayerCellProps) {
  return (
    <td className='*:block'>
      <Link href={`/players/${player.slug}`}>{player.name}</Link>
      {player2 && <Link href={`/players/${player2.slug}`}>{player2.name}</Link>}
      {player3 && <Link href={`/players/${player3.slug}`}>{player3.name}</Link>}
    </td>
  )
}
