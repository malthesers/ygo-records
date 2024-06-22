import CardInfoBox from './CardInfoBox'
import Image from 'next/image'
import { trapTypeIconsMap } from '@/app/data/card-info/trapTypes'
import { TrapType } from '@/interfaces/card/trap'

interface CardInfoTrapTypeProps {
  type: TrapType
}

export default function CardInfoTrapType({ type }: CardInfoTrapTypeProps) {
  return (
    <CardInfoBox property='Type'>
      <div className='flex flex-row gap-2'>
        <Image src={trapTypeIconsMap[type]} alt={`${type} attribute icon`} width={20} className='size-6' />
        <p>{type}</p>
      </div>
    </CardInfoBox>
  )
}
