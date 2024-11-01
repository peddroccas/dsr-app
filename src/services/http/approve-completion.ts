import { api } from '@/services/api'

interface ApproveCompletionProps {
  id: string
  token: string
}

export async function approveCompletion({ id, token }: ApproveCompletionProps) {
  const response = await api.patch(
    '/completions/approve',
    {
      id,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
  return response.data
}
