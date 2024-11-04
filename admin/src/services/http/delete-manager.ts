import { api } from '@/services/api'

interface DeleteManagerProps {
  id: string
  token: string
}

export async function deleteManager({ id, token }: DeleteManagerProps) {
  const response = await api.delete(`/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}
