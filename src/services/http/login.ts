import { api } from '@/services/api'

interface LoginProps {
  email: string
  password: string
}

export async function login({
  email,
  password,
}: LoginProps): Promise<{ token: string }> {
  const response = await api.post('/login', {
    email,
    password,
  })
  return response.data
}
