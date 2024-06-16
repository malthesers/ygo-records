import { ICard } from '@/interfaces/card'
import Card from '@/components/card/Card'
import Link from 'next/link'
import CardRender from '@/components/card/CardRender'

interface PopularCardProps {
  card: ICard
}

export default function PopularCard({ card }: PopularCardProps) {
  return (
    <Link href={`/cards/${card.id}`}>
      {/* <Card card={card} /> */}
      <CardRender card={card} />
    </Link>
  )
}
