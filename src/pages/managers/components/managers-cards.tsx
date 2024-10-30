import { useManager } from '@/hooks/use-manager'
import { ManagerCard } from './manager-card'
import CreateManagerDialog from './modals/create-manager-dialog'
import EditManagerDialog from './modals/edit-manager-modal'

export function ManagersCards() {
  const { managers } = useManager()

  if (!managers) {
    return <></>
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-8 bg-venice-blue-900 p-8 rounded-md">
      {managers.map(manager => (
        <EditManagerDialog
          key={manager.id}
          manager={manager}
          trigger={<ManagerCard key={manager.id} manager={manager} />}
        />
      ))}
      <CreateManagerDialog />
    </div>
  )
}
