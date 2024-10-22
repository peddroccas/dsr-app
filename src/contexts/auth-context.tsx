import { getProfile } from '@/services/http/get-profile'
import { login as signIn } from '@/services/http/login'
import type { user } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { type ReactNode, createContext, useEffect, useState } from 'react'

export interface AuthType {
  user: user | undefined
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}
export const AuthContext = createContext({} as AuthType)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string>('')
  const { data: user, refetch } = useQuery<user>({
    queryKey: ['profile'],
    enabled: Boolean(token),
    queryFn: async () => {
      if (token) {
        return await getProfile({ token })
      }
      return null
    },
  })

  useEffect(() => {
    async function getToken() {
      const token = localStorage.getItem('auth')
      if (token) {
        setToken(token)
      }
    }
    getToken()
  }, [])

  async function login(email: string, password: string): Promise<void> {
    const { token } = await signIn({ email, password })
    if (token) {
      localStorage.setItem('auth', token)
      refetch()
    }
  }

  async function logout() {
    localStorage.removeItem('auth')
    refetch()
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
