import { StoreContext } from '@/contexts/store-context'
import { useContext } from 'react'

export function useStore() {
  return useContext(StoreContext)
}
