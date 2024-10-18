import { api } from '@/services/api'

export async function createUser() {
  const response = await api.post('/users', {
    name: 'Pedro Antunes Bernardes',
    email: 'pedroabernardes11@gmail.com',
    role: 'ADMIN',
  })
  return response.data
}
