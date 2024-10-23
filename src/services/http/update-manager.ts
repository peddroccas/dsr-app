import { api } from '@/services/api'

interface DeleteManagersProps {
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
}: DeleteManagersProps) {
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
