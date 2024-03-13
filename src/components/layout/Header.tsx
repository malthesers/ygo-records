import Link from 'next/link'
import logo from '~/images/logo.svg'

import Image from 'next/image'

export default function Header() {
  return (
    <header className='bg-sky-900'>
      <nav className='max-w-6xl mx-auto flex flex-row justify-between p-2'>
        <Link href='/' className='flex flex-row items-center gap-2 no-underline'>
          <Image src={logo} alt='YGO Records logo' width={70} />
          <span className='font-bold text-3xl'>YGO RECORDS</span>
        </Link>
        <div className='flex self-center gap-4'>
          <Link href='/tournaments/wcq'>WCQ</Link>
          <Link href='/tournaments/ycs'>YCS</Link>
          <Link href='/tournaments/team-ycs'>TEAM YCS</Link>
          <Link href='/tournaments/remote-ycs'>Remote YCS</Link>
          {/* <Link href='/worlds'>Worlds</Link> */}
        </div>
      </nav>
    </header>
  )
}
