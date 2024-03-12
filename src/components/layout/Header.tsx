import Link from 'next/link'
import logo from '~/images/logo.svg'
import Image from 'next/image'

export default function Header() {
  return (
    <header className='bg-sky-900'>
      <nav className='max-w-6xl mx-auto flex flex-row justify-between p-3'>
        <Link href='/'>
          <Image src={logo} alt='YGO Records logo' width={100} />
        </Link>
        <div className='flex self-center gap-4'>
          <Link href='/wcq'>WCQ</Link>
          <Link href='/ycs'>YCS</Link>
          <Link href='/team-ycs'>TEAM YCS</Link>
          <Link href='/remote-ycs'>Remote YCS</Link>
          {/* <Link href='/worlds'>Worlds</Link> */}
        </div>
      </nav>
    </header>
  )
}
