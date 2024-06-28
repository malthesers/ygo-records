import CardRender from '@/components/card/CardRender'
import { ICard } from '@/interfaces/card'
import Link from 'next/link'

interface DecklistCardProps {
  card: ICard
}

export default function DecklistCard({ card }: DecklistCardProps) {
  return (
    <Link href={`/cards/${card.id}`}>
      <CardRender card={card} />
    </Link>
  )
}
