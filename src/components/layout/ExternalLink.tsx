import { ReactNode } from 'react'

interface ExternalLinkProps {
  children: ReactNode
  href: string
}

export default function ExternalLink({ children, href }: ExternalLinkProps) {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  )
}
