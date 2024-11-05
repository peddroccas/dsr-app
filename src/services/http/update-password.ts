import { api } from '@/services/api'

interface updatePasswordProps {
  password: string
  token: string
}

export async function updatePassword({ password, token }: updatePasswordProps) {
  const response = await api.patch(
    '/users/change-password',
    { password },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
  return response.data
}
