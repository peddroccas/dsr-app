import { createUser } from '@/services/http/create-user'

export function ManagersTasks() {
  return (
    <button
      onClick={async () => {
        const data = await createUser()
        console.log(data)
      }}
      className="text-red-400"
    >
      ManagersTasks
    </button>
  )
}
