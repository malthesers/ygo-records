import axios from 'axios'
import queryString from 'query-string'
import useSWR from 'swr'

async function fetcher(endpoint: string, query?: any) {
  return (await axios.get(`${process.env.API_URL}/${endpoint}?${query}`)).data
}

export default function useAPI<T>(endpoint: string, params?: any) {
  const query = queryString.stringify(params, { skipEmptyString: true, skipNull: true })
  const { data, error, isLoading } = useSWR<T>([endpoint, query], ([url, query]) => fetcher(url, query))

  return {
    data,
    isError: error,
    isLoading,
  }
}
