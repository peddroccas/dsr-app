import { ManagerProvider } from '@/contexts/manager-context'
import { ManagersCards } from './components/managers-cards'

export function Managers() {
  return (
    <ManagerProvider>
      <div className="bg-venice-blue-950 flex flex-col gap-8">
        <header className="flex justify-between px-8">
          <h1 className="text-ignara-400 text-4xl">Gerentes</h1>
        </header>
        <ManagersCards />
      </div>
    </ManagerProvider>
  )
}
