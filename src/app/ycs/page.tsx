'use client'

import TournamentTable from '@/components/table/TournamentTable'
import { IEvent } from '@/interfaces/event'
import type { Metadata } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import logo from '~/images/logos/ycs.png'
import ycsTestData from '../data/ycs'

// export const metadata: Metadata = {
//   title: 'YGOTops | Yu-Gi-Oh! Championship Series',
//   description: 'YGOTops',
// }

export default function YCSListPage() {
  const [events, setEvents] = useState<IEvent[] | null>()

  useEffect(() => {
    setEvents(ycsTestData)
  }, [])

  return (
    <main>
      <h1>Yu-Gi-Oh! Championship Series</h1>
      {/* <Image src={logo} alt='Yu-Gi-Oh! Championship Series logo' priority className='max-w-md mx-auto' /> */}
      {events && <TournamentTable events={events} />}
    </main>
  )
}
