import { ICard } from '@/interfaces/card'
import useQueryParamsStore from '@/stores/queryParamsStore'
import useAPI from './useAPI'

interface ICardsResponse {
  length: number
  cards: ICard[]
}

/**
 * Custom hook for fetching cards from the API based on query parameters.
 *
 * @returns An object of length, cards and the booleans isError and isLoading,
 */
export default function useCards(): {
  length: number | undefined
  cards: ICard[] | undefined
  isError: boolean
  isLoading: boolean
} {
  const queryParams = useQueryParamsStore((state) => state.queryParams)
  const { data, isError, isLoading } = useAPI<ICardsResponse>('cards', queryParams)

  return {
    length: data?.length,
    cards: data?.cards,
    isError,
    isLoading,
  }
}
