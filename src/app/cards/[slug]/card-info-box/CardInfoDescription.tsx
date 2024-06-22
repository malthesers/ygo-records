import CardInfoBox from './CardInfoBox'

interface CardInfoDescriptionProps {
  description: string
}

export default function CardInfoDescription({ description }: CardInfoDescriptionProps) {
  return (
    <CardInfoBox property='Description' className='whitespace-pre-wrap'>
      {description}
    </CardInfoBox>
  )
}
