import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './use-auth'

export const useRequireAuth = () => {
  const navigate = useNavigate()
  const { user } = useAuth()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])
}
