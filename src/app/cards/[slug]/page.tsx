import { ICard } from '@/interfaces/card'
import CardInfo from './CardInfo'
import Card from '@/components/card/Card'
import getData from '@/services/getData'

export default async function CardPage({ params }: { params: { slug: string } }) {
  const card = await getData<ICard>(`cards/${params.slug}`)

  return (
    <main className='space-y-4'>
      <section className='flex flex-col md:flex-row'>
        {/* <Image src={cardart} alt='card art' className='shadow-2xl' /> */}
        {card && <Card card={card} />}
        {card && <CardInfo card={card} />}
      </section>
    </main>
  )
}
