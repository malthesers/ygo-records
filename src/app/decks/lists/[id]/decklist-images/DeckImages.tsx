import { ICard } from '@/interfaces/card'
import DecklistCard from './DecklistCard'

interface DeckImagesProps {
  title: string
  cards: ICard[]
  className?: string
}

export default function DeckImages({ title, cards, className }: DeckImagesProps) {
  return (
    <div className='bg-sky-900'>
      <p className='bg-sky-950 p-4 text-2xl font-semibold'>
        <span>{title}</span>
        <span> ({cards.length})</span>
      </p>
      <div className={`p-4 ${className || ''}`}>
        {cards.map((card, index) => (
          <DecklistCard key={index} card={card} />
        ))}
      </div>
    </div>
  )
}
