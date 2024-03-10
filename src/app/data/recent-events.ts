import { IEvent } from '@/interfaces/event'
import ycsTestData from './ycs'
import teamYcsTestData from './team-ycs'

const recentEventsTest: IEvent[] = [...teamYcsTestData, ...ycsTestData]

export default recentEventsTest
