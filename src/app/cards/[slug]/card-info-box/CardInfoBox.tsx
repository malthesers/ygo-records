import React from 'react'

interface CardInfoBoxTemplateProps {
  property: string
  children: React.ReactNode
}

export default function CardInfoBoxTemplate({ property, children }: CardInfoBoxTemplateProps) {
  return (
    <div className='bg-sky-950 p-2'>
      <p className='text-sm italic mb-1'>{property}</p>
      {children}
    </div>
  )
}
