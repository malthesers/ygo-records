'use client'

import TournamentTable from '@/components/table/TournamentTable'
import type { Metadata } from 'next'
import Image from 'next/image'
import logo from '~/images/logos/team-ycs.png'
import { useEffect, useState } from 'react'
import { IEvent } from '@/interfaces/event'
import teamYcsTestData from '../data/team-ycs'

// export const metadata: Metadata = {
//   title: 'YGOTops | TEAM Yu-Gi-Oh! Championship Series',
//   description: 'YGOTops',
// }

export default function TEAMYCSListPage() {
  const [events, setEvents] = useState<IEvent[] | null>()

  useEffect(() => {
    setEvents(teamYcsTestData)
  }, [])

  return (
    <main>
      <h1>TEAM Yu-Gi-Oh! Championship Series</h1>
      {/* <Image
        src={logo}
        alt='Yu-Gi-Oh! TEAM Championship Series logo'
        priority
        className='max-w-[20rem] w-full mx-auto'
      /> */}
      {events && <TournamentTable events={events} />}
    </main>
  )
}
