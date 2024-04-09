import { ICard } from '@/interfaces/card'
import Image from 'next/image'

interface CardNameplateProps {
  card: ICard
}

export default function CardNameplate({ card }: CardNameplateProps) {
  let attributeIcon = card.cardType === 'Spell' ? 'SPELL' : card.cardType === 'Trap' ? 'TRAP' : card.attribute

  return (
    <div className='w-[87%] h-[6.5%] mt-[7%] p-[0.5%] mx-auto flex flex-row justify-between overflow-hidden'>
      <p className='max-w-[90%] font-card-title text-[2.7rem] leading-[0.75] text-nowrap'>
        {/* <span>{name}</span> */}
      </p>
      <Image
        src={`/images/attributes/${attributeIcon}.svg`}
        alt={`${attributeIcon} attribute icon`}
        width={50}
        height={50}
        className='w-auto h-full'
      />
    </div>
  )
}
