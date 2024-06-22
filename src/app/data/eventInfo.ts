import { EventSlug } from '@/interfaces/event'
import { StaticImageData } from 'next/image'
import splashWcq from '~/images/splash/wcq.png'
import splashYcs from '~/images/splash/ycs.png'
import splashTeamYcs from '~/images/splash/team-ycs.png'
import splashRemoteYcs from '~/images/splash/remote-ycs.png'
import logoWcq from '~/images/logos/wcq.png'
import logoYcs from '~/images/logos/ycs.png'
import logoTeamYcs from '~/images/logos/team-ycs.png'
import logoRemoteYcs from '~/images/logos/remote-ycs.png'

interface EventInfo {
  splash: StaticImageData
  logo: StaticImageData
  title: string
}

export const eventTypes: EventSlug[] = ['wcq', 'ycs', 'team-ycs', 'remote-ycs']

const eventInfo: Record<EventSlug, EventInfo> = {
  wcq: { splash: splashWcq, logo: logoWcq, title: 'WCQ' },
  ycs: { splash: splashYcs, logo: logoYcs, title: 'YCS' },
  'team-ycs': { splash: splashTeamYcs, logo: logoTeamYcs, title: 'TEAM YCS' },
  'remote-ycs': { splash: splashRemoteYcs, logo: logoRemoteYcs, title: 'Remote YCS' },
}

export default eventInfo
