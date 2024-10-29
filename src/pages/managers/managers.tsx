import CreateManagerModal from './components/modals/create-manager-dialog'
import { ManagerProvider } from '@/contexts/manager-context'
import { ManagersCards } from './components/managers-cards'

export function Managers() {
  return (
    <ManagerProvider>
      <div className="bg-venice-blue-950 flex flex-col gap-8">
        <header className="flex justify-between">
          <h1 className="text-ignara-400 text-3xl">Gerentes</h1>
          <CreateManagerModal />
        </header>
        <ManagersCards />
      </div>
    </ManagerProvider>
  )
}
