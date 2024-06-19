import { CardType } from '@/interfaces/card'
import { ICardsQueryParams } from '@/interfaces/query-params'
import { create } from 'zustand'

interface useQueryParamsStoreProps {
  formValues: ICardsQueryParams
  queryParams: ICardsQueryParams
  updateFormValues: (values: ICardsQueryParams) => void
  updateQueryParams: (params: ICardsQueryParams) => void
}

const useQueryParamsStore = create<useQueryParamsStoreProps>((set) => ({
  formValues: {
    name: '',
    description: '',
    cardType: '' as CardType,
    atkMin: '',
    atkMax: '',
    defMin: '',
    defMax: '',
  },
  queryParams: {},
  updateFormValues: (values) => set({ formValues: values }),
  updateQueryParams: (params) => set({ queryParams: params }),
}))

export default useQueryParamsStore
