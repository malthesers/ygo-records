import Link from 'next/link'
import logo from '~/images/logo.svg'

import Image from 'next/image'

export default function Header() {
  return (
    <header className='bg-sky-900'>
      <nav className='flex flex-row justify-between p-2'>
        <Link href='/' className='flex flex-row items-center gap-2 no-underline'>
          <Image src={logo} alt='YGO Records logo' width={50} priority />
          <span className='font-bold text-xl md:text-2xl'>YGO RECORDS</span>
        </Link>
        <div className='hidden md:flex self-center gap-4 '>
          <Link href='/cards'>Cards</Link>
          <Link href='/events'>Events</Link>
          {/* <Link href='/events/wcq'>WCQ</Link>
          <Link href='/events/ycs'>YCS</Link>
          <Link href='/events/team-ycs'>TEAM YCS</Link>
          <Link href='/events/remote-ycs'>Remote YCS</Link> */}
          {/* <Link href='/worlds'>Worlds</Link> */}
        </div>
      </nav>
    </header>
  )
}
