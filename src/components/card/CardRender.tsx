import { ICard } from '@/interfaces/card'
import S3CardRender from '../layout/S3CardRender'

interface CardRenderProps {
  card: ICard
  className?: string
}

export default function CardRender({ card, className }: CardRenderProps) {
  return (
    <S3CardRender
      passcode={card.id}
      alt={`Card render of ${card.name}`}
      className={'w-full h-fit max-w-96 shadow-2xl aspect-[640/933] ' + className}
      width={640}
      height={933}
      priority
    />
  )
}
