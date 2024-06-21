import Image from 'next/image'
import logo from '~/images/logo.svg'

export default function loading() {
  return (
    <section className='grid place-content-center p-8'>
      <Image src={logo} alt='YGO Records logo' width={200} className='animate-spin-y' />
    </section>
  )
}
