import CardRender from '@/components/card/CardRender'
import { ICard } from '@/interfaces/card'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface DisplayedCardProps {
  card: ICard
}

export default function DisplayedCard({ card }: DisplayedCardProps) {
  const [imageUrl, setImageUrl] = useState<string>('')

  useEffect(() => {
    fetch(`/api/image/${card.id}`)
      .then((res) => res.json())
      .then((url) => setImageUrl(url))
  }, [])

  // return <CardRender card={card} />
  return (
    <div>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={`Card render of ${card.name}`}
          className='w-full max-w-96 shadow-2xl'
          width={200}
          height={291}
          priority
        />
      )}
    </div>
  )
}
