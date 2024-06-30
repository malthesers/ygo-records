import { notFound } from 'next/navigation'

/**
 * Fetches data from the YGO API and returns data.
 *
 * @param endpoint The API endpoint to fetch data from.
 * @returns Data from API.
 */
export default async function getData<T>(endpoint: string): Promise<T> {
  const baseUrl = 'https://ygo-api.vercel.app'
  const response = await fetch(`${baseUrl}/${endpoint}`, { next: { revalidate: 3600 } })

  if (!response.ok) {
    notFound()
  }

  return response.json()
}
