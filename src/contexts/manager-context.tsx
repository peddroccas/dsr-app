import { useAuth } from '@/hooks/use-auth'
import { getManagers } from '@/services/http/get-managers'
import type { user } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { type ReactNode, createContext } from 'react'

export interface ManagerType {
  managers: (user & { store: string })[] | null | undefined
  refetch: () => void
}
export const ManagerContext = createContext({} as ManagerType)

interface ContextProviderProps {
  children: ReactNode
}

export function ManagerProvider({ children }: ContextProviderProps) {
  const { token } = useAuth()
  const { data: managers, refetch: fetch } = useQuery<
    (user & { store: string })[]
  >({
    enabled: Boolean(token),
    queryKey: ['managers'],
    queryFn: async () => getManagers({ token }),
  })

  const refetch = () => {
    fetch()
  }

  return (
    <ManagerContext.Provider value={{ managers, refetch }}>
      {children}
    </ManagerContext.Provider>
  )
}
