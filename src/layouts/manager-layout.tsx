import { Outlet } from 'react-router-dom'
import { Header } from '@/components/header'
import { useRequireAuth } from '@/hooks/use-require-auth'

export function ManagerLayout() {
  useRequireAuth()
  return (
    <div className="flex flex-col min-h-screen font-montserrat">
      <Header />
      <main className="bg-venice-blue flex-1 p-8">
        <Outlet />
      </main>
    </div>
  )
}
