import Link from 'next/link'

export default function Header() {
  return (
    <header className='bg-sky-900'>
      <nav className='flex flex-row justify-between px-6 py-3'>
        <Link href='/'>YGOTops</Link>
        <div className='flex gap-4'>
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
