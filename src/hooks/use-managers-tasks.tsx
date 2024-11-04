import { ManagersTasksContext } from '@/contexts/manager-context'
import { useContext } from 'react'

export function useManagersTasks() {
  return useContext(ManagersTasksContext)
}
