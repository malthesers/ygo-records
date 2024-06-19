import { ICard } from '@/interfaces/card'
import axios from 'axios'
import useSWR from 'swr'
import useCardsQueryParams from './useCardsQueryParams'
import queryString from 'query-string'
import { useEffect, useState } from 'react'
import { ICardsQueryParams } from '@/interfaces/query-params'

const baseURL = 'https://ygo-records-api.onrender.com'

async function fetcher(url: string, params: any) {
  const res = await axios.get(baseURL + url, { params })
  // const res = await axios.get('https://ygo-records-api.onrender.com' + url)

  console.log(res.data)

  return res.data
}

interface ICardsResponse {
  length: number
  cards: ICard[]
}

export default function useAPI() {
  const [queryParams, setQueryParams] = useState<ICardsQueryParams>({
    name: 'dante',
  })

  /**
   * Updates queryParams state with new query params.
   *
   * @param newParams New query params to apply.
   */
  function updateQueryParams(newParams: ICardsQueryParams) {
    setQueryParams({
      ...queryParams,
      ...newParams,
    })
  }

  const { data, error, isLoading } = useSWR<ICardsResponse>(['/cards', queryParams], ([url, queryParams]) =>
    fetcher(url, queryParams)
  )

  return {
    length: data?.length,
    cards: data?.cards,
    isError: error,
    isLoading,
    updateQueryParams,
  }
}
