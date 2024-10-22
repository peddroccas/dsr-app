import { api } from '@/services/api'

interface CreateUserProps {
  token?: string
}

export async function createUser({ token }: CreateUserProps) {
  const response = await api.post(
    '/users',
    {
      name: 'Rafaela Barbos Antunes',
      email: 'rafaelababernardes@gmail.com',
      role: 'ADMIN',
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
  return response.data
}
