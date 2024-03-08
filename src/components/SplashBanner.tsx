import Image, { StaticImageData } from 'next/image'

interface SplashBannerProps {
  splash: StaticImageData
  logo: StaticImageData
  alt: string
}

export default function SplashBanner({ splash, logo, alt }: SplashBannerProps) {
  return (
    <div className='grid grid-cols-1 grid-rows-1 *:grid-center *:m-auto h-[25rem] overflow-hidden '>
      <Image src={splash} alt={`${alt} splash banner`} className='w-full h-full object-cover' priority />
      <div className='w-full h-full bg-white/50 backdrop-blur-sm p-4'>
        <div className='w-full h-full border-4 border-sky-900'></div>
      </div>
      <Image src={logo} alt={`${alt} logo`} priority className='z-10 max-w-[20rem] w-full m-auto' />
    </div>
  )
}
