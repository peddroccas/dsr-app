import { api } from '@/services/api'

interface GetPendingTasksByManagerProps {
  token: string
}

export async function getPendingTasksByManager({
  token,
}: GetPendingTasksByManagerProps) {
  const response = await api.get('/manager/task', {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}
