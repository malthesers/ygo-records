'use client'

import { ICard } from '@/interfaces/card'
import Image from 'next/image'
import { useState } from 'react'

interface CardArtworkProps {
  card: ICard
  isPendulum: boolean
}

export default function CardArtwork({ card, isPendulum }: CardArtworkProps) {
  const [src, setSrc] = useState<string>(`/images/placeholders/${card.id}.jpg`)
  // function setFallback() {
  //   setSrc(`/images/placeholders/10045474.jpg`)
  // }

  return (
    <Image
      src={src}
      alt={`${card.name} artwork`}
      className={[isPendulum ? 'mt-[26%] w-[87%]' : 'mt-[27%] w-[76%]'] + ' mx-auto'}
      width={450}
      height={450}
      priority
      // onError={setFallback}
    />
  )
}
