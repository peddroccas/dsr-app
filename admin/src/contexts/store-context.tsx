import { useAuth } from '@/hooks/use-auth'
import { getStores } from '@/services/http/get-stores'
import type { store, user } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { type ReactNode, createContext } from 'react'

export interface StoreType {
  stores: store[] | null | undefined
  refetchStores: () => void
}
export const StoreContext = createContext({} as StoreType)

interface ContextProviderProps {
  children: ReactNode
}

export function StoreProvider({ children }: ContextProviderProps) {
  const { token } = useAuth()
  const { data: stores, refetch: fetch } = useQuery<user[]>({
    enabled: Boolean(token),
    queryKey: ['stores'],
    queryFn: async () => getStores({ token }),
  })

  const refetchStores = () => {
    fetch()
  }

  return (
    <StoreContext.Provider value={{ stores, refetchStores }}>
      {children}
    </StoreContext.Provider>
  )
}
