import linkArrowSideInactive from '~/images/frame-assets/link-arrow-side-inactive.webp'
import linkArrowSideActive from '~/images/frame-assets/link-arrow-side-active.webp'
import Image from 'next/image'

interface SideArrowProps {
  position: 'T' | 'R' | 'B' | 'L'
  active: boolean
}

export default function SideArrow({ position, active }: SideArrowProps) {
  const rotations = {
    T: 'rotate-0 mx-auto',
    R: 'rotate-90 -mr-[7%]',
    B: '-scale-y-100 mx-auto',
    L: '-rotate-90 -ml-[7%]',
  }

  return (
    <Image
      src={active ? linkArrowSideActive : linkArrowSideInactive}
      alt='link arrow corner'
      className={'w-[20%] transform ' + `${rotations[position]}`}
    />
  )
}
