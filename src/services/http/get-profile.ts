import { api } from '@/services/api'

interface GetProfileProps {
  token: string
}

export async function getProfile({ token }: GetProfileProps) {
  const response = await api.get('/profile', {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}
