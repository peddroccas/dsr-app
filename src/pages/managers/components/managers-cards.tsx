import { useManager } from '@/hooks/use-manager'
import { ManagerCard } from './manager-card'
import CreateManagerDialog from './modals/create-manager-dialog'

export function ManagersCards() {
  const { managers } = useManager()

  if (!managers) {
    return <></>
  }

  return (
    <div className="grid grid-cols-4 gap-8 bg-venice-blue-900 p-8 rounded-md">
      {managers.map(manager => (
        <ManagerCard key={manager.id} manager={manager} />
      ))}
      <CreateManagerDialog />
    </div>
  )
}
