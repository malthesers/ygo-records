import { IDeckCard } from '@/interfaces/deck'

interface CardRowProps {
  card: IDeckCard
}

export default function CardRow({ card }: CardRowProps) {
  return (
    <p className='flex flex-row gap-2 border-b-[2px] last-of-type:border-none border-white/50 p-2'>
      <span>{card.count}</span>
      <span>{card.name}</span>
    </p>
  )
}
