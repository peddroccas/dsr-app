import { api } from '@/services/api'

interface GetStoresProps {
  token: string
}

export async function getStores({ token }: GetStoresProps) {
  const response = await api.get('/stores', {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}
