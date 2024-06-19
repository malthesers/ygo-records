import Image from 'next/image'
import logoMoon from '~/images/logo-moon.png'

export default function DisplayedCardPlaceholder() {
  return (
    <div className='grid place-content-center bg-sky-950 border-white rounded-xl border-4 aspect-[200/291] animate-pulse'>
      <Image src={logoMoon} alt='YGO Records logo moon' width={50} />
    </div>
  )
}
