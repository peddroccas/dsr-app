import { ManagerContext } from '@/contexts/manager-context'
import { useContext } from 'react'

export function useManager() {
  return useContext(ManagerContext)
}
