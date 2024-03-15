import { IDeckTypeCard } from '@/interfaces/deck'
import Link from 'next/link'

interface CardRowProps {
  card: IDeckTypeCard
}

export default function CardRow({ card }: CardRowProps) {
  return (
    <p className='flex flex-row gap-2 border-b-[2px] last-of-type:border-none border-white/50 py-2'>
      <span>{card.count}x</span>
      <Link href='/cards/0'>{card.name}</Link>
    </p>
  )
}
