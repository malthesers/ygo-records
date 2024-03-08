'use client'

import type { Metadata } from 'next'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '~/images/logos/worlds.png'
// import { Event } from "@/interfaces/event";
import WorldsEvent from '@/components/worlds/WorldsEvent'

// export const metadata: Metadata = {
//   title: 'YGOTops | Yu-Gi-Oh! World Championship',
//   description: 'YGOTops'
// }

async function getWorldsEvents() {
  const res = await fetch('/api/worlds')
  const data = await res.json()
  return data
}

export default function Worlds() {
  const [worlds, setWorlds] = useState<Array<Event>>()

  // useEffect(() => {
  //    fetch('http://localhost:3000/api/worlds')
  //    .then((res) => res.json())
  //    .then((data) => setWorlds(data))
  // }, [])

  return (
    <main>
      <h1>Yu-Gi-Oh! World Championship</h1>
      <Image src={logo} alt='Yu-Gi-Oh! World Championship logo' priority className='max-w-md mx-auto' />
      <table className='w-full text-center'>
        <thead>
          <tr className='bg-black'>
            <th>Year</th>
            <th>Nationality</th>
            <th>Winner</th>
            <th>Deck</th>
          </tr>
        </thead>
        <tbody>
          {/* {worlds?.map((event) => (
            <WorldsEvent key={event.year} event={event} />
          ))} */}
        </tbody>
      </table>
    </main>
  )
}
