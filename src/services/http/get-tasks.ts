import { api } from '@/services/api'

interface GetTasksProps {
  token: string
}

export async function getTasks({ token }: GetTasksProps) {
  const response = await api.get('/tasks', {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}
