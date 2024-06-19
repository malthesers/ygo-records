import { ICardsQueryParams } from '@/interfaces/query-params'
import { create } from 'zustand'

interface useQueryParamsStoreProps {
  queryParams: ICardsQueryParams
  updateQueryParams: (params: ICardsQueryParams) => void
}

const useQueryParamsStore = create<useQueryParamsStoreProps>((set) => ({
  queryParams: {},
  updateQueryParams: (params) => set({ queryParams: params }),
}))

export default useQueryParamsStore
