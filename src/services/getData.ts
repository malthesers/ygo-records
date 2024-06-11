/**
 * Fetches data from the YGO API and returns data.
 *
 * @param endpoint The API endpoint to fetch data from.
 * @returns Data from API.
 */
export default async function getData<T>(endpoint: string): Promise<T> {
  const response = await fetch(`https://ygo-records-api.onrender.com/${endpoint}`)

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}
