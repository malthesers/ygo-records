'use client'

import TournamentTable from '@/components/tournament/TournamentTable'
import SplashBanner from '@/components/SplashBanner'
import { IEvent } from '@/interfaces/event'
import type { Metadata } from 'next'
import { useEffect, useState } from 'react'
import ycsTestData from '../../data/ycs'
import splash from '~/images/splash/ycs.png'
import logo from '~/images/logos/ycs.png'

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
      <SplashBanner splash={splash} logo={logo} alt='Yu-Gi-Oh! Championship Series' />
      {events && <TournamentTable events={events} />}
    </main>
  )
}
