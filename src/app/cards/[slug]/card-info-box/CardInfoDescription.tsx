import CardInfoBoxTemplate from './CardInfoBox'

interface CardInfoDescriptionProps {
  description: string
}

export default function CardInfoDescription({ description }: CardInfoDescriptionProps) {
  return (
    <CardInfoBoxTemplate property='Description' className='whitespace-pre-wrap'>
      {description}
    </CardInfoBoxTemplate>
  )
}
