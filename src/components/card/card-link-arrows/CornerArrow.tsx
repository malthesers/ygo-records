import linkArrowCornerInactive from '~/images/frame-assets/link-arrow-corner-inactive.webp'
import linkArrowCornerActive from '~/images/frame-assets/link-arrow-corner-active.webp'
import Image from 'next/image'

interface CornerArrowProps {
  position: 'TL' | 'TR' | 'BL' | 'BR'
  active: boolean
}

export default function CornerArrow({ position, active }: CornerArrowProps) {
  const rotations = {
    TL: 'rotate-0',
    TR: '-scale-x-100',
    BR: '-scale-100',
    BL: '-scale-y-100',
  }

  return (
    <Image
      src={active ? linkArrowCornerActive : linkArrowCornerInactive}
      alt='link arrow corner'
      className={'w-[10.5%] transform ' + `${rotations[position]}`}
    />
  )
}
