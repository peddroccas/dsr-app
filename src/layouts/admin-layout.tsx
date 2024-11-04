import { Outlet } from 'react-router-dom'
import { useRequireAuth } from '@/hooks/use-require-auth'
import { useAdmin } from '@/hooks/use-admin'
import { Header } from '@/components/admin-header'

export function AdminLayout() {
  useRequireAuth()
  useAdmin()
  return (
    <div className="flex flex-col min-h-screen font-montserrat">
      <Header />
      <main className="bg-venice-blue flex-1 p-8">
        <Outlet />
      </main>
    </div>
  )
}
