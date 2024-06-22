import { Level } from '@/interfaces/card/monster'
import CardInfoBoxTemplate from './CardInfoBox'
import levelStar from '~/images/frame-assets/level.webp'
import Image from 'next/image'

interface CardInfoLevelProps {
  level: Level
}

export default function CardInfoLevel({ level }: CardInfoLevelProps) {
  return (
    <CardInfoBoxTemplate property='Level'>
      <div className='flex flex-row gap-2 items-center'>
        <Image src={levelStar} alt='Level icon' width={16} className='size-4' />
        <p>{level}</p>
      </div>
    </CardInfoBoxTemplate>
  )
}
