import { ICard } from '@/interfaces/card'
import S3CardRender from '../layout/S3CardRender'

interface CardRenderProps {
  card: ICard
}

export default function CardRender({ card }: CardRenderProps) {
  return (
    <S3CardRender
      passcode={card.id}
      alt={`Card render of ${card.name}`}
      className='w-full max-w-96 shadow-2xl'
      width={640}
      height={933}
      priority
    />
  )
}
