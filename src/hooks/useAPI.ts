import axios from 'axios'
import useSWR from 'swr'

async function fetcher(endpoint: string, params?: any) {
  return (await axios.get('https://ygo-records-api.onrender.com' + endpoint, { params })).data
}

export default function useAPI<T>(endpoint: string, params?: any) {
  const { data, error, isLoading } = useSWR<T>([endpoint, params], ([url, params]) => fetcher(url, params))

  return {
    data,
    isError: error,
    isLoading,
  }
}
