import CardInfoBox from './CardInfoBox'
import Image from 'next/image'
import { trapTypeIconsMap } from '@/app/data/card-info/trapTypes'
import { TrapType } from '@/interfaces/card/trap'

interface CardInfoTrapTypeProps {
  trapType: TrapType
}

export default function CardInfoTrapType({ trapType }: CardInfoTrapTypeProps) {
  return (
    <CardInfoBox property='Trap type'>
      <div className='flex flex-row gap-2'>
        <Image src={trapTypeIconsMap[trapType]} alt={`${trapType} attribute icon`} width={20} className='size-6' />
        <p>{trapType}</p>
      </div>
    </CardInfoBox>
  )
}
