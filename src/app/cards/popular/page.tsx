import PopularCard from '@/components/landing/popular-cards/PopularCard'
import { IPopularCard } from '@/interfaces/card'
import getData from '@/services/getData'

export default async function PopularCardsPage() {
  const popularCards = await getData<IPopularCard[]>('cards/popular')

  return (
    <main>
      <section>
        <h1>Most popular cards</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
          {popularCards.map((card, index) => (
            <PopularCard key={card.details.id} card={card} index={index} />
          ))}
        </div>
      </section>
    </main>
  )
}
