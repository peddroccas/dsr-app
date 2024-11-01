import { api } from '@/services/api'

interface DenieCompletionProps {
  id: string
  token: string
}

export async function denieCompletion({ id, token }: DenieCompletionProps) {
  const response = await api.delete(`/completions/denie/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}
