import { Level } from '@/interfaces/card/monster'
import levelStar from '~/images/frame-assets/level.webp'
import Image from 'next/image'

interface CardTagLevelProps {
  level: Level
}

export default function CardTagLevel({ level }: CardTagLevelProps) {
  return (
    <div
      className={
        (level === 12 ? 'justify-between' : 'justify-end') + ' w-[79%] h-full mx-auto flex flex-row *:aspect-square'
      }
    >
      {Array.from({ length: level }).map((_key, index) => (
        <Image src={levelStar} alt='level icon' width={25} height={25} key={index} className='w-auto h-full' />
      ))}
    </div>
  )
}
