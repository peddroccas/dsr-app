import { api } from '@/services/api'

interface CreateUserProps {
  token?: string
  name: string
  email: string
  role: 'MANAGER' | 'ADMIN'
}

export async function createUser({
  name,
  email,
  role,
  token,
}: CreateUserProps) {
  const response = await api.post(
    '/users',
    {
      name,
      email,
      role,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
  return response.data
}
