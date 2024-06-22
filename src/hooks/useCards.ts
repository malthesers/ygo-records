import { ICard } from '@/interfaces/card'
import useQueryParamsStore from '@/stores/queryParamsStore'
import useAPI from './useAPI'

interface ICardsResponse {
  length: number
  cards: ICard[]
}

export default function useCards() {
  const queryParams = useQueryParamsStore((state) => state.queryParams)
  const { data, isError, isLoading } = useAPI<ICardsResponse>('cards', queryParams)

  return {
    length: data?.length,
    cards: data?.cards,
    isError,
    isLoading,
  }
}
