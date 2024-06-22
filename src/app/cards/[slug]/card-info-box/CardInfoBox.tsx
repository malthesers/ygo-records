import React from 'react'

interface CardInfoBoxProps {
  property: string
  className?: string
  children: React.ReactNode
}

export default function CardInfoBox({ property, className, children }: CardInfoBoxProps) {
  return (
    <div className={'bg-sky-950 p-2 ' + className}>
      <p className='text-sm italic mb-1'>{property}</p>
      <p>{children}</p>
    </div>
  )
}
