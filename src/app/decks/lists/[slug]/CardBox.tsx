import { IDeckTypeCard } from '@/interfaces/deck'
import CardRow from './CardRow'

interface CardBoxProps {
  title: string
  cards: IDeckTypeCard[]
}

export default function CardBox({ title, cards }: CardBoxProps) {
  const cardCount = cards.reduce((counter, currCard) => counter + currCard.count, 0)

  return (
    <div className='bg-sky-900 h-fit'>
      <p className='bg-sky-950 p-4 flex flex-row gap-2 text-xl font-semibold'>
        <span>{title}</span>
        <span>({cardCount})</span>
      </p>
      <div className='px-4'>
        {cards.map((card) => (
          <CardRow key={card.name} card={card} />
        ))}
      </div>
    </div>
  )
}
