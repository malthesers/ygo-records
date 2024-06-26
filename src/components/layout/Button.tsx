import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick: (props?: any) => void
}

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      className={
        'w-full py-2 px-3 bg-sky-950 border-white border-2 duration-200 hover:bg-white hover:text-sky-950 ' +
        (className || '')
      }
      onClick={onClick}
    >
      {children}
    </button>
  )
}
