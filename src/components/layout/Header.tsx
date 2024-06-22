'use client'

import logo from '~/images/logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { TbMenuDeep } from 'react-icons/tb'

export default function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    setShowMenu(false)
  }, [pathname])

  return (
    <header className='h-20 bg-sky-900'>
      <nav className='h-full flex flex-row justify-between p-2'>
        <Link href='/' className='flex flex-row items-center gap-2 no-underline'>
          <Image src={logo} alt='YGO Records logo' width={50} priority />
          <span className='hidden sm:block font-bold text-xl md:text-2xl'>YGO RECORDS</span>
        </Link>
        <div className='hidden sm:flex self-center gap-4 '>
          <Link href='/cards'>Cards</Link>
          <Link href='/decks'>Decks</Link>
          <Link href='/events'>Events</Link>
        </div>
        <div className='sm:hidden my-auto'>
          <TbMenuDeep onClick={() => setShowMenu(!showMenu)} size='2.5em' />
        </div>
      </nav>
      <nav
        className={
          (showMenu ? 'opacity-100' : 'opacity-0 pointer-events-none') +
          ' z-40 sm:hidden bg-sky-950 fixed top-20 left-0 h-dvh w-dvw max-w-none duration-200'
        }
      >
        <div className='flex flex-col *:p-2'>
          <Link href='/cards/popular'>Cards</Link>
          <Link href='/decks'>Decks</Link>
          <Link href='/events'>Events</Link>
        </div>
      </nav>
    </header>
  )
}
