import { ManagersTable } from './components/managers-table'
import { Plus } from '@phosphor-icons/react'
import { useState } from 'react'
import CreateManagerDialog from './components/create-manager-dialog'
import { Button } from '@nextui-org/react'

export function Managers() {
  const [isUserCreatingNewManager, setIsUserCreatingNewManager] =
    useState<boolean>(false)

  return (
    <div className="bg-venice-blue-950 flex flex-col gap-8">
      <header className="flex justify-between">
        <h1 className="text-ignara-400 text-3xl">Gerentes</h1>
        <Button onClick={() => setIsUserCreatingNewManager(true)}>
          <Plus className="text-slate-50" />
        </Button>
        <CreateManagerDialog
          open={isUserCreatingNewManager}
          onClose={() => setIsUserCreatingNewManager(false)}
        />
      </header>
      <ManagersTable />
    </div>
  )
}
