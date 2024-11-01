import { api } from '@/services/api'

interface updateManagersProps {
  id: string
  name: string
  email: string
  token: string
}

export async function updateManager({
  id,
  email,
  name,
  token,
}: updateManagersProps) {
  const response = await api.put(
    '/users',
    {
      userId: id,
      name,
      email,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
  return response.data
}
