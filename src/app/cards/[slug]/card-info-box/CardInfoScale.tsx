import CardInfoBoxTemplate from './CardInfoBox'
import { Scale } from '@/interfaces/card/monster'

interface CardInfoScaleProps {
  scale: Scale
}

export default function CardInfoScale({ scale }: CardInfoScaleProps) {
  return (
    <CardInfoBoxTemplate property='Scale'>
      <p>{scale}</p>
    </CardInfoBoxTemplate>
  )
}
