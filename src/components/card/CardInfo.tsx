import { ICard } from '@/interfaces/card'

interface CardInfoProps {
  card: ICard
}

export default function CardInfo({ card }: CardInfoProps) {
  return (
    <div className='bg-sky-900 my-4 p-4 border-y-2 border-white space-y-2'>
      <h1 className='text-xl font-semibold text-left mb-0'>{card.name}</h1>
      <p className='bg-sky-950 p-2 whitespace-pre-wrap'>{card.description}</p>
      <p>
        {card.atk} / {card.def}
      </p>
      <p>{card.type}</p>
      <p>{card.attribute}</p>
      <p>{card.level}</p>
    </div>
  )
}
