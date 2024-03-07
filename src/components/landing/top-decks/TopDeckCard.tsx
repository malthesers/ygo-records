import { IDeck } from '@/interfaces/deck'

interface TopDeckCardProps {
  topDeck: IDeck
}

export default function TopDeckCard({ topDeck }: TopDeckCardProps) {
  return (
    <article>
      <p>{topDeck.name}</p>
    </article>
  )
}
