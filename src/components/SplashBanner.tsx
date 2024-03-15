import Image, { StaticImageData } from 'next/image'

interface SplashBannerProps {
  splash: StaticImageData
  logo: StaticImageData
  alt: string
  clear?: boolean
}

export default function SplashBanner({ splash, logo, alt, clear }: SplashBannerProps) {
  return (
    <section className='grid grid-cols-1 grid-rows-1 *:grid-center *:m-auto h-[15rem] overflow-hidden p-0'>
      <Image src={splash} alt={`${alt} splash banner`} className='size-full object-cover' priority />
      <div className={(clear ? 'bg-white/0' : 'bg-white/50 backdrop-blur-sm') + ' w-full h-full p-4'}>
        <div className={(clear ? 'border-white' : 'border-sky-900') + ' size-full flex border-4 '}>
          <Image src={logo} alt={`${alt} logo`} className='w-auto max-h-full m-auto p-4' priority />
        </div>
      </div>
    </section>
  )
}
