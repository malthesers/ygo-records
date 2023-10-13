'use client'

import type { Metadata } from "next"
import { useEffect } from 'react'
import Image from "next/image";
import logo from '~/images/logos/worlds.png'

// export const metadata: Metadata = {
//   title: 'YGOTops | Yu-Gi-Oh! World Championship',
//   description: 'YGOTops'
// }

async function getWorldsEvents() {
  const res = await fetch('/api/worlds')
  const data = await res.json()
  return data
}

export default async function Worlds() {
  // const events = await getWorldsEvents()

  return (
    <main>
      <h1>Yu-Gi-Oh! World Championship</h1>
      <Image
        src={logo}
        alt='Yu-Gi-Oh! World Championship logo'
        priority
        className="max-w-md mx-auto"
      />
    </main>
  )
}
