import Link from 'next/link'
import { testCards } from '@/app/data/test-cards'
import PopularCard from './PopularCard'

export default async function PopularCards() {
  return (
    <section>
      <h2>Popular Cards</h2>
      <hr className='mb-4'></hr>
      <div className='mb-4 grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-6'>
        {testCards?.map((card) => (
          <PopularCard key={card.id} card={card} />
        ))}
      </div>
      <Link href='/cards/popular' className='text-sm font-semibold uppercase'>
        See all popular cards
      </Link>
    </section>
  )
}
