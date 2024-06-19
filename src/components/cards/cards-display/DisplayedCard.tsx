import CardRender from '@/components/card/CardRender'
import { ICard } from '@/interfaces/card'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import DisplayedCardPlaceholder from './DisplayedCardPlaceholder'
import Link from 'next/link'

interface DisplayedCardProps {
  card: ICard
}

export default function DisplayedCard({ card }: DisplayedCardProps) {
  const [imageUrl, setImageUrl] = useState<string>('')

  useEffect(() => {
    fetch(`/api/image/${card.id}`)
      .then((res) => res.json())
      .then((url) => {
        setImageUrl(url)
      })
  }, [])

  return (
    <Link href={`/cards/${card.id}`}>
      {imageUrl ? (
        <div className='grid grid-cols-1 grid-rows-1 *:grid-center'>
          <Image
            src={imageUrl}
            alt={`Card render of ${card.name}`}
            className='w-full max-w-96 shadow-2xl duration-200'
            width={200}
            height={291}
            priority
          />
        </div>
      ) : (
        <DisplayedCardPlaceholder />
      )}
    </Link>
  )
}
