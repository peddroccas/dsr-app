import { api } from '@/services/api'

interface GetManagersProps {
  token: string
}

export async function getManagers({ token }: GetManagersProps) {
  const response = await api.get('/managers', {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}
