import { api } from '@/services/api'

interface CreateTaskProps {
  token?: string
  title: string
  weeklyFrequency: number
}

export async function createTask({
  title,
  token,
  weeklyFrequency,
}: CreateTaskProps) {
  const response = await api.post(
    '/tasks',
    {
      title,
      weeklyFrequency,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
  return response.data
}
