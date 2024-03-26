import { Attribute } from '@/interfaces/card'
import Image from 'next/image'

interface CardNameplateProps {
  name: string
  attribute: Attribute
}

export default function CardNameplate({ name, attribute }: CardNameplateProps) {
  return (
    <div className='w-[87%] h-[6%] mt-[7%] mx-auto flex flex-row justify-between'>
      <p className='text-nowrap'>{name}</p>
      <Image
        src={`/images/attributes/${attribute}.svg`}
        alt={`${attribute} attribute`}
        width={50}
        height={50}
        className='w-auto h-full'
      />
    </div>
  )
}
