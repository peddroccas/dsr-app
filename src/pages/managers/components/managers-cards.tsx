import { useManager } from '@/hooks/use-manager'
import CreateManagerDialog from './modals/create-manager-dialog'
import EditManagerDialog from './modals/edit-manager-modal'
import Card from '@/components/card'

export function ManagersCards() {
  const { managers } = useManager()

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-8 bg-venice-blue-900 p-8 rounded-md">
      {managers?.map(manager => (
        <EditManagerDialog
          key={manager.id}
          manager={manager}
          trigger={
            <Card key={manager.id} title={manager.name}>
              <p className="text-slate-700 text-sm font-medium">
                {manager.email}
              </p>
              <p className="text-slate-600 text-xs italic">{manager.store}</p>
            </Card>
          }
        />
      ))}
      <CreateManagerDialog />
    </div>
  )
}
