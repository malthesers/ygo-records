import Link from 'next/link'
import logo from '~/images/logo.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='bg-sky-900'>
      <div className='max-w-6xl mx-auto py-16 px-3 text-center grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <div className='sm:col-span-2 md:col-span-1'>
          <Link href='/' className='no-underline'>
            <Image src={logo} alt='YGO Records logo' width={100} className='mx-auto' priority />
            <span className='font-bold text-2xl'>YGO RECORDS</span>
          </Link>
        </div>
        <div>
          <p>Column 2</p>
        </div>
        <div>
          <p>Column 3</p>
        </div>
      </div>
    </footer>
  )
}
