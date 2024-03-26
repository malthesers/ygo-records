import { Attribute } from '@/interfaces/card'
import Image from 'next/image'

interface CardNameplateProps {
  name: string
  attribute: Attribute
}

export default function CardNameplate({ name, attribute }: CardNameplateProps) {
  return (
    <div className='w-[87%] h-[6%] mt-[7%] mx-auto flex flex-row justify-between overflow-hidden'>
      <p className='max-w-[90%] font-card-title text-[2.7rem] leading-[0.75] text-nowrap'>
        {/* <span>{name}</span> */}
      </p>
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
