import { IDeckType } from '@/interfaces/deck'
import { IEvent } from '@/interfaces/event'
import { IPlayer } from '@/interfaces/player'
import getData from '@/services/getData'
import { MetadataRoute } from 'next'

const baseUrl = 'https://ygo-records.vercel.app'
const routes: string[] = [
  '',
  'players',
  'decks',
  'events',
  'events/wcq',
  'events/ycs',
  'events/team-ycs',
  'events/remote-ycs',
  'cards',
  'cards/popular',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
  }))

  const deckTypePages: MetadataRoute.Sitemap = (await getData<IDeckType[]>('decktypes')).map((deckType) => ({
    url: `${baseUrl}/decks/${deckType.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
  }))

  const playerPages: MetadataRoute.Sitemap = (await getData<IPlayer[]>('players')).map((player) => ({
    url: `${baseUrl}/players/${player.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
  }))

  const eventPages: MetadataRoute.Sitemap = (await getData<IEvent[]>('events')).map((event) => ({
    url: `${baseUrl}/events/${event.type.slug}/${event.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
  }))

  return [...pages, ...deckTypePages, ...playerPages, ...eventPages]
}
