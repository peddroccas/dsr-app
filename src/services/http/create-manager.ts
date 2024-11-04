import { api } from '@/services/api'

interface CreateManagerProps {
  token?: string
  name: string
  email: string
  storeId: string
}

export async function createManager({
  name,
  email,
  storeId,
  token,
}: CreateManagerProps) {
  const response = await api.post(
    '/managers',
    {
      name,
      email,
      storeId,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
  return response.data
}
