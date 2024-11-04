import { api } from '@/services/api'

interface GetApprovedCompletionsProps {
  token: string
}

export async function getApprovedCompletions({
  token,
}: GetApprovedCompletionsProps) {
  const response = await api.get('/completions/approved', {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}
