import CardInfoBoxTemplate from './CardInfoBox'
import Image from 'next/image'
import { spellTypeIconsMap } from '@/app/data/card-info/spellTypes'
import { SpellType } from '@/interfaces/card/spell'

interface CardInfoSpellTypeProps {
  type: SpellType
}

export default function CardInfoSpellType({ type }: CardInfoSpellTypeProps) {
  return (
    <CardInfoBoxTemplate property='Type'>
      <div className='flex flex-row gap-2'>
        <Image src={spellTypeIconsMap[type]} alt={`${type} attribute icon`} width={20} className='size-6' />
        <p>{type}</p>
      </div>
    </CardInfoBoxTemplate>
  )
}
