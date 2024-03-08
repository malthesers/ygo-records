'use client'

import type { Metadata } from 'next'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '~/images/logos/worlds.png'
// import { Event } from "@/interfaces/event";

// export const metadata: Metadata = {
//   title: 'YGOTops | Yu-Gi-Oh! World Championship',
//   description: 'YGOTops'
// }
export default function Worlds() {
  return (
    <main>
      <h1>Yu-Gi-Oh! World Championship</h1>
      <Image src={logo} alt='Yu-Gi-Oh! World Championship logo' priority className='max-w-md mx-auto' />
    </main>
  )
}
