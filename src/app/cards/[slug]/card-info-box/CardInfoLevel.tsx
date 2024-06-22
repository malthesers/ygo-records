import CardInfoBoxTemplate from './CardInfoBox'
import { Level } from '@/interfaces/card/monster'

interface CardInfoLevelProps {
  level: Level
}

export default function CardInfoLevel({ level }: CardInfoLevelProps) {
  return (
    <CardInfoBoxTemplate property='Level'>
      <p>{level}</p>
    </CardInfoBoxTemplate>
  )
}
