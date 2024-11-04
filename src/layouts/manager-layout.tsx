import { Outlet } from 'react-router-dom'
import { useRequireAuth } from '@/hooks/use-require-auth'
import { Header } from '@/components/manager-header'
import { useManager } from '@/hooks/use-manager'

export function ManagerLayout() {
  useRequireAuth()
  useManager()
  return (
    <div className="flex flex-col min-h-screen font-montserrat">
      <Header />
      <main className="bg-venice-blue flex-1 p-8">
        <Outlet />
      </main>
    </div>
  )
}
