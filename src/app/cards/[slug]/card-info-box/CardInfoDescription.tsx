import CardInfoBoxTemplate from './CardInfoBox'

interface CardInfoDescriptionProps {
  property: string
  description: string
}

export default function CardInfoDescription({ property, description }: CardInfoDescriptionProps) {
  return (
    <CardInfoBoxTemplate property={property}>
      <p className='whitespace-pre-wrap'>{description}</p>
    </CardInfoBoxTemplate>
  )
}
