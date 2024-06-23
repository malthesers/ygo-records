import { ICard } from '@/interfaces/card'
import S3CardRender from '../layout/S3CardRender'

interface CardRenderProps {
  card: ICard
  width?: number
  className?: string
}

export default function CardRender({ card, width, className }: CardRenderProps) {
  const height = width ? Math.round((width / 640) * 933) : 933

  return (
    <S3CardRender
      passcode={card.id}
      alt={`Card render of ${card.name}`}
      className={'w-full h-fit max-w-96 shadow-2xl aspect-[640/933] ' + (className || '')}
      width={width || 640}
      height={height}
      priority
    />
  )
}
