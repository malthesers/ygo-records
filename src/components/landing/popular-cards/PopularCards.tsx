import Link from 'next/link'
import PopularCard from './PopularCard'
import getData from '@/services/getData'
import { IPopularCard } from '@/interfaces/card'

export default async function PopularCards() {
  const popularCards = await getData<IPopularCard[]>('cards/popular/6')

  return (
    <section>
      <h2>Popular Cards</h2>
      <hr className='mb-4'></hr>
      <div className='mb-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-6'>
        {popularCards?.map((card, index) => (
          <PopularCard key={card.details.id} index={index} card={card} />
        ))}
      </div>
      <Link href='/cards/popular' className='text-sm font-semibold uppercase'>
        See all popular cards
      </Link>
    </section>
  )
}
