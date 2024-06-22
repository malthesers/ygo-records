import CardInfoBox from './CardInfoBox'
import Image from 'next/image'
import { spellTypeIconsMap } from '@/app/data/card-info/spellTypes'
import { SpellType } from '@/interfaces/card/spell'

interface CardInfoSpellTypeProps {
  spellType: SpellType
}

export default function CardInfoSpellType({ spellType }: CardInfoSpellTypeProps) {
  return (
    <CardInfoBox property='Spell type'>
      <div className='flex flex-row gap-2'>
        <Image src={spellTypeIconsMap[spellType]} alt={`${spellType} attribute icon`} width={20} className='size-6' />
        <p>{spellType}</p>
      </div>
    </CardInfoBox>
  )
}
