import { IMonsterCard } from '@/interfaces/card/monster'
import CardInfoBoxTemplate from './CardInfoBox'
import scaleLeft from '~/images/frame-assets/scale-left.png'
import scaleRight from '~/images/frame-assets/scale-right.png'
import Image from 'next/image'

interface CardInfoScaleProps {
  card: IMonsterCard
}

export default function CardInfoScale({ card }: CardInfoScaleProps) {
  if (!card.pendulum?.scale) return null

  return (
    <CardInfoBoxTemplate property='Scale'>
      <div className='flex flex-row gap-2 items-center'>
        <Image src={scaleLeft} alt='Pendulum Scale left icon' width={20} />
        <p>{card.pendulum.scale}</p>
        <Image src={scaleRight} alt='Pendulum Scale right icon' width={20} />
      </div>
    </CardInfoBoxTemplate>
  )
}
