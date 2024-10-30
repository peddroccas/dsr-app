import { api } from '@/services/api'

interface CreateStoreProps {
  token?: string
  name: string
}

export async function createStore({ name, token }: CreateStoreProps) {
  const response = await api.post(
    '/stores',
    {
      name,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
  return response.data
}
