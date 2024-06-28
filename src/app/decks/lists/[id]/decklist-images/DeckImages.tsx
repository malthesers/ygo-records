import { ICard } from '@/interfaces/card'
import DecklistCard from './DecklistCard'

interface DeckImagesProps {
  title: string
  cards: ICard[]
  className?: string
}

export default function DeckImages({ title, cards, className }: DeckImagesProps) {
  return (
    <div className='bg-sky-900 p-4'>
      <p className='text-2xl font-semibold mb-2'>{title}</p>
      <div className={className}>
        {cards.map((card, index) => (
          <DecklistCard key={index} card={card} />
        ))}
      </div>
    </div>
  )
}
