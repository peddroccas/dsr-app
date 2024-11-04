import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './use-auth'

export const useAdmin = () => {
  const navigate = useNavigate()
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      if (user.role !== 'ADMIN') {
        navigate('/manager')
      }
    }
  }, [user, navigate])
}
