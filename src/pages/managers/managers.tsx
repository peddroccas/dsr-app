import { ManagerProvider } from '@/contexts/manager-context'
import { ManagersCards } from './components/managers-cards'

export function Managers() {
  return (
    <ManagerProvider>
      <div className="flex flex-col gap-8">
        <header className="flex justify-between px-8">
          <h1 className="text-slate-50 text-4xl">Gerentes</h1>
        </header>
        <ManagersCards />
      </div>
    </ManagerProvider>
  )
}
