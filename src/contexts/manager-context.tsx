import { useAuth } from '@/hooks/use-auth'
import { getManagers } from '@/services/http/get-managers'
import { getPendingCompletions } from '@/services/http/get-pending-completions'
import { getTasks } from '@/services/http/get-tasks'
import type { completion, tasks, user } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { type ReactNode, createContext } from 'react'

export interface ManagerType {
  managers: (user & { store: string })[] | null | undefined
  tasks: tasks[] | null | undefined
  pendingCompletionsByManager:
    | { completions: completion[]; user: Omit<user, 'email'> }[]
    | null
    | undefined
  refetchManagers: () => void
  refetchTasks: () => void
  refetchPendingCompletions: () => void
}
export const ManagerContext = createContext({} as ManagerType)

interface ContextProviderProps {
  children: ReactNode
}

export function ManagerProvider({ children }: ContextProviderProps) {
  const { token } = useAuth()
  const { data: managers, refetch: managersFetch } = useQuery<
    (user & { store: string })[]
  >({
    enabled: Boolean(token),
    queryKey: ['managers'],
    queryFn: async () => getManagers({ token }),
  })

  const { data: tasks, refetch: tasksFetch } = useQuery<tasks[]>({
    enabled: Boolean(token),
    queryKey: ['tasks'],
    queryFn: async () => getTasks({ token }),
  })

  const { data: pendingCompletionsByManager, refetch: completionFetch } =
    useQuery<{ completions: completion[]; user: Omit<user, 'email'> }[]>({
      enabled: Boolean(token),
      queryKey: ['pendingCompletions'],
      queryFn: async () => getPendingCompletions({ token }),
    })

  const refetchPendingCompletions = () => {
    completionFetch()
  }

  const refetchManagers = () => {
    managersFetch()
  }

  const refetchTasks = () => {
    tasksFetch()
  }

  return (
    <ManagerContext.Provider
      value={{
        managers,
        tasks,
        pendingCompletionsByManager,
        refetchManagers,
        refetchTasks,
        refetchPendingCompletions,
      }}
    >
      {children}
    </ManagerContext.Provider>
  )
}
