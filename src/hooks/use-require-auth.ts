import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './use-auth'

export const useRequireAuth = () => {
  const navigate = useNavigate()
  const { user, token } = useAuth()

  useEffect(() => {
    if (!user && !token) {
      navigate('/login')
    }
  }, [user, navigate, token])
}
