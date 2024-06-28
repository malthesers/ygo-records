import axios from 'axios'
import queryString from 'query-string'
import useSWRInfinite from 'swr/infinite'

async function fetcher(endpoint: string) {
  const baseUrl = process.env.YGOAPI_URL
  return (await axios.get(`${baseUrl}/${endpoint}`)).data
}

/**
 * Custom hook for fetching API data.
 *
 * @param endpoint The API endpoint to fetch from.
 * @param params Parameters object converted to string for the query.
 * @returns An object of data and the booleans isError and isLoading.
 */
export default function useInfiniteAPI<T>(
  endpoint: string,
  params?: any
): {
  data: T[] | undefined
  size: number
  setSize: (value: number) => void
  isError: boolean
  isLoading: boolean
} {
  const query = queryString.stringify(params, { skipEmptyString: true, skipNull: true })

  const { data, size, setSize, error, isLoading } = useSWRInfinite((pageIndex: number, prevPageData: any) => {
    if (prevPageData && !prevPageData.length) return null

    return `${endpoint}?page=${pageIndex}&${query}`
  }, fetcher)

  return {
    data,
    size,
    setSize,
    isError: error,
    isLoading,
  }
}
