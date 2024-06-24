import useQueryParamsStore from '@/stores/queryParamsStore'
import useInfiniteAPI from './useInfiniteAPI'
import { ICard } from '@/interfaces/card'

interface ICardsResponse {
  length: number
  cards: ICard[]
}

/**
 * Custom hook for fetching cards infinitely from the API based on query parameters.
 *
 * @returns An object of results, size, setSize function and the booleans isError and isLoading,
 */
export default function useInfiniteCards() {
  const queryParams = useQueryParamsStore((state) => state.queryParams)
  const { data, size, setSize, isError, isLoading } = useInfiniteAPI<ICardsResponse>('cards', queryParams)

  return {
    results: data,
    size,
    setSize,
    isError,
    isLoading,
  }
}
