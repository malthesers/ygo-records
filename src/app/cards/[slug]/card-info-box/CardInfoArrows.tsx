import { LinkArrows } from '@/interfaces/card/monster'
import CardInfoBoxTemplate from './CardInfoBox'

interface CardInfoArrowsProps {
  arrows: LinkArrows
}

export default function CardInfoArrows({ arrows }: CardInfoArrowsProps) {
  const linkArrows = Object.keys(arrows)

  return (
    <CardInfoBoxTemplate property='Arrows'>
      <p>{linkArrows.join(', ')}</p>
    </CardInfoBoxTemplate>
  )
}
