import Image, { StaticImageData } from 'next/image'

interface SplashBannerProps {
  splash: StaticImageData
  logo: StaticImageData
  alt: string
  clear?: boolean
}

export default function SplashBanner({ splash, logo, alt, clear }: SplashBannerProps) {
  return (
    <div className='grid grid-cols-1 grid-rows-1 *:grid-center *:m-auto h-[25rem] overflow-hidden '>
      <Image src={splash} alt={`${alt} splash banner`} className='w-full h-full object-cover' priority />
      <div className={(clear ? 'bg-white/0' : 'bg-white/50 backdrop-blur-sm') + ' w-full h-full p-4'}>
        <div className={(clear ? 'border-white' : 'border-sky-900') + ' w-full h-full border-4 '}></div>
      </div>
      <Image src={logo} alt={`${alt} logo`} priority className='z-10 max-w-[20rem] w-full m-auto' />
    </div>
  )
}
