import { ICard } from '@/interfaces/card'
import axios from 'axios'
import useSWR from 'swr'
import useCardsQueryParams from './useCardsQueryParams'

async function fetcher(url: string, params: any) {
  const res = await axios.get('https://ygo-records-api.onrender.com' + url, { params })

  return res.data
}

interface ICardsResponse {
  length: number
  cards: ICard[]
}

export default function useCards() {
  const { queryParams } = useCardsQueryParams()
  const { data, error, isLoading } = useSWR<ICardsResponse>(['/cards', queryParams], ([url, queryParams]) =>
    fetcher(url, queryParams)
  )

  return {
    length: data?.length,
    cards: data?.cards,
    isError: error,
    isLoading,
  }
}
