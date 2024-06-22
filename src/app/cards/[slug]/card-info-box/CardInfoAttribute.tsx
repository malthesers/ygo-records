import { Attribute } from '@/interfaces/card/monster'
import CardInfoBoxTemplate from './CardInfoBox'
import Image from 'next/image'
import { attributeIconsMap } from '@/app/data/card-info/attributes'

interface CardInfoAttributeProps {
  attribute: Attribute
}

export default function CardInfoAttribute({ attribute }: CardInfoAttributeProps) {
  return (
    <CardInfoBoxTemplate property='Attribute'>
      <div className='flex flex-row gap-2'>
        <Image src={attributeIconsMap[attribute]} alt={`${attribute} attribute icon`} width={20} className='size-6' />
        <p>{attribute}</p>
      </div>
    </CardInfoBoxTemplate>
  )
}
