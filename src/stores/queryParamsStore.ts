import initialQueryParams from '@/app/data/initialQueryParams'
import { CardType } from '@/interfaces/card'
import { ICardsQueryParams } from '@/interfaces/query-params'
import { create } from 'zustand'

interface useQueryParamsStoreProps {
  formValues: ICardsQueryParams
  queryParams: ICardsQueryParams
  resetFormValues: () => void
  updateFormValues: (values: ICardsQueryParams) => void
  updateQueryParams: (params: ICardsQueryParams) => void
}

const useQueryParamsStore = create<useQueryParamsStoreProps>((set) => ({
  formValues: initialQueryParams,
  queryParams: {},
  resetFormValues: () => set({ formValues: initialQueryParams }),
  updateFormValues: (values) => set((state) => ({ formValues: { ...state.formValues, ...values } })),
  updateQueryParams: (params) => set({ queryParams: params }),
}))

export default useQueryParamsStore
