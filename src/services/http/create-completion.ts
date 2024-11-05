import { api } from '@/services/api'

interface CreateCompletionProps {
  token?: string
  taskId: string
  image: string
}

export async function createCompletion({
  image,
  taskId,
  token,
}: CreateCompletionProps) {
  const response = await api.post(
    '/completions',
    {
      taskId,
      image,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
  return response.data
}
