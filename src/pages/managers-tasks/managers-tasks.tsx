import { useAuth } from '@/hooks/use-auth'
import { createUser } from '@/services/http/create-user'

export function ManagersTasks() {
  const { token } = useAuth()
  return (
    <button
      onClick={async () => {
        const data = await createUser({ token })
        console.log(data)
      }}
      className="text-red-400"
    >
      ManagersTasks
    </button>
  )
}
