import CardInfoBoxTemplate from './CardInfoBox'
import { Def } from '@/interfaces/card/monster'

interface CardInfoDEFProps {
  def: Def
}

export default function CardInfoDEF({ def }: CardInfoDEFProps) {
  return (
    <CardInfoBoxTemplate property='DEF'>
      <p>{def}</p>
    </CardInfoBoxTemplate>
  )
}
