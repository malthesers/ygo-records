'use client'

import TournamentTable from '@/components/table/TournamentTable'
import SplashBanner from '@/components/SplashBanner'
import type { Metadata } from 'next'
import splash from '~/images/splash/team-ycs.png'
import logo from '~/images/logos/team-ycs.png'
import { useEffect, useState } from 'react'
import { IEvent } from '@/interfaces/event'
import teamYcsTestData from '../../data/team-ycs'

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
      {/* <h1>TEAM Yu-Gi-Oh! Championship Series</h1> */}
      <SplashBanner splash={splash} logo={logo} alt='Yu-Gi-Oh! TEAM Championship Series' />
      {events && <TournamentTable events={events} />}
    </main>
  )
}
