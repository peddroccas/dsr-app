import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './use-auth'

export const useManager = () => {
  const navigate = useNavigate()
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      if (user.role !== 'MANAGER') {
        navigate('/admin')
      }
    }
  }, [user, navigate])
}
