import { api } from '@/services/api'

interface GetPendingCompletionsProps {
  token: string
}

export async function getPendingCompletions({
  token,
}: GetPendingCompletionsProps) {
  const response = await api.get('/completions/pending', {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}
