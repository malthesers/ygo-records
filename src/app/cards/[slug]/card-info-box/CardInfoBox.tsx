import React from 'react'

interface CardInfoBoxTemplateProps {
  property: string
  className?: string
  children: React.ReactNode
}

export default function CardInfoBoxTemplate({ property, className, children }: CardInfoBoxTemplateProps) {
  return (
    <div className={'bg-sky-950 p-2 ' + className}>
      <p className='text-sm italic mb-1'>{property}</p>
      {children}
    </div>
  )
}
