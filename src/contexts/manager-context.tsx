import { useAuth } from '@/hooks/use-auth'
import { getApprovedCompletions } from '@/services/http/get-approved-completions'
import { getManagers } from '@/services/http/get-managers'
import { getPendingCompletions } from '@/services/http/get-pending-completions'
import { getPendingTasks } from '@/services/http/get-pending-tasks'
import { getTasks } from '@/services/http/get-tasks'
import type { completion, tasks, user } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { type ReactNode, createContext } from 'react'

export interface ManagersTasksType {
  managers: (user & { store: string })[] | null | undefined
  tasks: tasks[] | null | undefined
  pendingTasks:
    | {
        manager: {
          name: string
          store: string
          id: string
          email: string
        }
        remainingTasks: {
          remaining: number
          id: string
          title: string
          weeklyFrequency: number
        }[]
      }[]
    | null
    | undefined
  pendingCompletionsByManager:
    | { completions: completion[]; user: Omit<user, 'email'> }[]
    | null
    | undefined
  approvedCompletionsByManager:
    | { completions: completion[]; user: Omit<user, 'email'> }[]
    | null
    | undefined
  refetchManagers: () => void
  refetchTasks: () => void
  refetchPendingTasks: () => void
  refetchPendingCompletions: () => void
  refetchApprovedCompletions: () => void
}
export const ManagersTasksContext = createContext({} as ManagersTasksType)

interface ContextProviderProps {
  children: ReactNode
}

export function ManagersTasksProvider({ children }: ContextProviderProps) {
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

  const { data: pendingTasks, refetch: pendingTasksFetch } = useQuery<
    {
      manager: {
        name: string
        store: string
        id: string
        email: string
      }
      remainingTasks: {
        remaining: number
        id: string
        title: string
        weeklyFrequency: number
      }[]
    }[]
  >({
    enabled: Boolean(token),
    queryKey: ['pendingTasks'],
    queryFn: async () => getPendingTasks({ token }),
  })

  const {
    data: approvedCompletionsByManager,
    refetch: approvedCompletionFetch,
  } = useQuery<{ completions: completion[]; user: Omit<user, 'email'> }[]>({
    enabled: Boolean(token),
    queryKey: ['approvedCompletions'],
    queryFn: async () => getApprovedCompletions({ token }),
  })

  const { data: pendingCompletionsByManager, refetch: pendingCompletionFetch } =
    useQuery<{ completions: completion[]; user: Omit<user, 'email'> }[]>({
      enabled: Boolean(token),
      queryKey: ['pendingCompletions'],
      queryFn: async () => getPendingCompletions({ token }),
    })

  const refetchPendingCompletions = () => {
    pendingCompletionFetch()
  }

  const refetchApprovedCompletions = () => {
    approvedCompletionFetch()
  }

  const refetchManagers = () => {
    managersFetch()
  }

  const refetchPendingTasks = () => {
    pendingTasksFetch()
  }
  const refetchTasks = () => {
    tasksFetch()
  }

  return (
    <ManagersTasksContext.Provider
      value={{
        managers,
        pendingTasks,
        tasks,
        approvedCompletionsByManager,
        pendingCompletionsByManager,
        refetchManagers,
        refetchPendingTasks,
        refetchTasks,
        refetchPendingCompletions,
        refetchApprovedCompletions,
      }}
    >
      {children}
    </ManagersTasksContext.Provider>
  )
}
