import { LinkArrows } from '@/interfaces/card/monster'
import CornerArrow from './CornerArrow'
import SideArrow from './SideArrow'

interface CardLinkArrowsProps {
  arrows: LinkArrows
}

export default function CardLinkArrows({ arrows }: CardLinkArrowsProps) {
  function isActive(position: keyof LinkArrows) {
    return arrows[position] ? true : false
  }

  return (
    <div className='w-[86.5%] h-[59.5%] mt-[21.5%] mx-auto grid *:grid-center'>
      <div className='w-[95.4%] h-[95.5%] mt-[2%] mx-auto flex flex-col justify-between'>
        <div className='flex flex-row justify-between'>
          <CornerArrow position='TL' active={isActive('TL')} />
          <CornerArrow position='TR' active={isActive('TR')} />
        </div>
        <div className='flex flex-row justify-between'>
          <CornerArrow position='BL' active={isActive('BL')} />
          <CornerArrow position='BR' active={isActive('BR')} />
        </div>
      </div>
      <div className='size-full flex flex-col justify-between'>
        <SideArrow position='T' active={isActive('T')} />
        <div className='flex flex-row justify-between'>
          <SideArrow position='L' active={isActive('L')} />
          <SideArrow position='R' active={isActive('R')} />
        </div>
        <SideArrow position='B' active={isActive('B')} />
      </div>
    </div>
  )
}
