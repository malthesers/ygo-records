import { IPopularCard } from '@/interfaces/card'
import Link from 'next/link'
import CardRender from '@/components/card/CardRender'

interface PopularCardProps {
  card: IPopularCard
  index: number
}

export default function PopularCard({ card, index }: PopularCardProps) {
  return (
    <Link href={`/cards/${card.details.id}`} className='grid *:grid-center text-center no-underline'>
      <CardRender card={card.details} />
      <div className='h-fit mt-auto grid grid-cols-[1fr] *:col-start-1 grid-rows-3'>
        <div className='row-start-1 row-end-3 bg-sky-900 p-1 mx-auto size-12 grid place-content-center rounded-full z-10'>
          <span className='text-xl font-bold'>{index + 1}</span>
        </div>
        <div className='row-start-2 row-end-4 bg-sky-800 p-2 pt-6'>
          <p>In {card.percentage}% of decks</p>
        </div>
      </div>
    </Link>
  )
}
