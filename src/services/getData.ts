import { notFound } from 'next/navigation'

/**
 * Fetches data from the YGO API and returns data.
 *
 * @param endpoint The API endpoint to fetch data from.
 * @returns Data from API.
 */
export default async function getData<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${process.env.API_URL}/${endpoint}`)

  if (!response.ok) {
    notFound()
  }

  return response.json()
}
