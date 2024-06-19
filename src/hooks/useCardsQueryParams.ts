import { ICardsQueryParams } from '@/interfaces/query-params'
import { useEffect, useState } from 'react'
import queryString from 'query-string'

export default function useCardsQueryParams() {
  const [queryParamsString, setQueryParamsString] = useState<string>('')
  const [queryParams, setQueryParams] = useState<ICardsQueryParams>({
    name: 'dante',
  })

  useEffect(() => {
    console.log(queryParams)
    setQueryParamsString(queryString.stringify(queryParams))
  }, [queryParams])

  /**
   * Updates queryParams state with new query params.
   *
   * @param newParams New query params to apply.
   */
  function updateQueryParams(newParams: ICardsQueryParams) {
    const qpString = queryString.stringify(newParams)
    console.log(qpString)
    setQueryParamsString(qpString)
    // setQueryParams({
    //   ...queryParams,
    //   ...newParams,
    // })
  }

  return { queryParams, queryParamsString, updateQueryParams }
}
