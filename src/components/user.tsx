import { useAuth } from '@/hooks/use-auth'

export default function User() {
  const { logout } = useAuth()
  return (
    <button
      onClick={logout}
      className="p-2 bg-ignara w-fit h-fit rounded-md text-stone-50"
    >
      logout
    </button>
  )
}
