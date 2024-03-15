import { ICard } from '@/interfaces/card'

interface CardInfoProps {
  card: ICard
}

export default function CardInfo({ card }: CardInfoProps) {
  return (
    <div>
      <p>{card.name}</p>
    </div>
  )
}
