import { useAuth } from '@/hooks/use-auth'

export default function User() {
  const { logout } = useAuth()
  return <button onClick={logout}>User</button>
}
