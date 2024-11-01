import { api } from '@/services/api'

interface GetPendingTasksProps {
  token: string
}

export async function getPendingTasks({ token }: GetPendingTasksProps) {
  const response = await api.get('/managers/tasks', {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}
