import axios from 'axios'
import queryString from 'query-string'
import useSWR from 'swr'

async function fetcher(endpoint: string, query?: any) {
  const baseUrl = 'https://ygo-api.vercel.app'
  return (await axios.get(`${baseUrl}/${endpoint}?${query}`)).data
}

/**
 * Custom hook for fetching API data.
 *
 * @param endpoint The API endpoint to fetch from.
 * @param params Parameters object converted to string for the query.
 * @returns An object of data and the booleans isError and isLoading.
 */
export default function useAPI<T>(
  endpoint: string,
  params?: any
): {
  data: T | undefined
  isError: boolean
  isLoading: boolean
} {
  const query = queryString.stringify(params, { skipEmptyString: true, skipNull: true })
  const { data, error, isLoading } = useSWR<T>([endpoint, query], ([url, query]) => fetcher(url, query))

  return {
    data,
    isError: error,
    isLoading,
  }
}
