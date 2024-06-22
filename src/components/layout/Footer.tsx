import Link from 'next/link'
import logo from '~/images/logo.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='bg-sky-900'>
      <div className='py-12 px-3 text-center'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div className='sm:col-span-2 md:col-span-1'>
            <Link href='/' className='no-underline'>
              <Image src={logo} alt='YGO Records logo' width={100} className='mx-auto' priority />
              <span className='font-bold text-2xl'>YGO RECORDS</span>
            </Link>
          </div>
          <div className='flex flex-col'>
            <p className='text-xl font-semibold'>Links</p>
            <Link href='/cards'>Card database</Link>
            <Link href='/cards/popular'>Popular cards</Link>
            <Link href='/decks'>Popular decks</Link>
            <Link href='/events'>All events</Link>
          </div>
          <div className='flex flex-col'>
            <p className='text-xl font-semibold'>Events</p>
            <Link href='/events/wcq'>WCQ</Link>
            <Link href='/events/ycs'>YCS</Link>
            <Link href='/events/team-ycs'>TEAM YCS</Link>
            <Link href='/events/remote-ycs'>Remote YCS</Link>
          </div>
        </div>
        <p className='mt-8 text-sm'>Copyright © 2024. YGO Records. All rights reserved.</p>
      </div>
    </footer>
  )
}
