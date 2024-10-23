import { ManagersTable } from './components/managers-table'
import { Plus } from '@phosphor-icons/react'
import { useState } from 'react'
import { Button } from '@nextui-org/react'
import CreateManagerModal from './components/modals/create-manager-modal'
import { ManagerProvider } from '@/contexts/manager-context'

export function Managers() {
  const [isUserCreatingNewManager, setIsUserCreatingNewManager] =
    useState<boolean>(false)

  return (
    <ManagerProvider>
      <div className="bg-venice-blue-950 flex flex-col gap-8">
        <header className="flex justify-between">
          <h1 className="text-ignara-400 text-3xl">Gerentes</h1>
          <Button
            isIconOnly
            onClick={() => setIsUserCreatingNewManager(true)}
            className="bg-venice-blue-900 shadow shadow-black"
          >
            <Plus className="text-slate-50" size={24} />
          </Button>
          <CreateManagerModal
            open={isUserCreatingNewManager}
            onClose={() => setIsUserCreatingNewManager(false)}
          />
        </header>
        <ManagersTable />
      </div>
    </ManagerProvider>
  )
}
