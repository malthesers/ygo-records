import Image, { StaticImageData } from 'next/image'
import React from 'react'
import hieroglyphics from '~/images/splash/hieroglyphs-blue.png'

interface TextBannerProps {
  splash?: StaticImageData
  alt?: string
  children?: React.ReactNode
}

export default function TextBanner({ splash, alt, children }: TextBannerProps) {
  return (
    <section className='relative min-h-[15rem] p-0 grid grid-cols-1 grid-rows-1 *:grid-center'>
      <Image
        className='-z-10 object-cover'
        src={splash || hieroglyphics}
        alt={alt || 'hieroglyphs splash image'}
        priority
        fill
      />
      <div className='size-full bg-black/50 p-4'>
        <div className='z-10 size-full p-4 flex flex-col gap-2 items-center justify-center border-white border-4'>
          {children}
        </div>
      </div>
    </section>
  )
}
