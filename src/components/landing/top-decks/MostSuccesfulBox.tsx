import { Placement } from '@/interfaces/deck'
import formatPlacement from '@/services/formatPlacement'
import Link from 'next/link'

interface IMostSuccesfulBoxProps {
  mostSuccesful: {
    placement: Placement
    player: string
    event: string
    _id: string
  }
}

export default function MostSuccesfulBox({ mostSuccesful }: IMostSuccesfulBoxProps) {
  return (
    <Link
      href={`/decks/lists/${mostSuccesful._id}`}
      className='h-full py-1 px-2 no-underline duration-200 hover:bg-sky-950'
    >
      <p className='text-xs italic'>Most succesful decklist</p>
      <p className='text-sm'>
        <span>{formatPlacement(mostSuccesful.placement)}</span>
        <span> at {mostSuccesful.event}</span>
      </p>
      <p className='text-sm'>{mostSuccesful.player}</p>
    </Link>
  )
}
