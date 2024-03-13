'use client'

import TournamentTable from '@/components/table/TournamentTable'
import SplashBanner from '@/components/SplashBanner'
import { IEvent } from '@/interfaces/event'
import type { Metadata } from 'next'
import { useEffect, useState } from 'react'
import ycsTestData from '../../data/ycs'
import splash from '~/images/splash/remote-ycs.png'
import logo from '~/images/logos/remote-ycs.png'

// export const metadata: Metadata = {
//   title: 'YGOTops | Yu-Gi-Oh! Championship Series',
//   description: 'YGOTops',
// }

export default function RemoteYCSListPage() {
  const [events, setEvents] = useState<IEvent[] | null>()

  useEffect(() => {
    setEvents(ycsTestData)
  }, [])

  return (
    <main>
      <SplashBanner splash={splash} logo={logo} alt='Remote Duel Yu-Gi-Oh! Championship Series' clear />
      {events && <TournamentTable events={events} />}
    </main>
  )
}
