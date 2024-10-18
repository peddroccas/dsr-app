import { Outlet } from 'react-router-dom'
import { Header } from '@/components/header'

export function DefaultLayout() {
  return (
    <div className="flex flex-col min-h-screen font-montserrat">
      <Header />
      <main className="bg-venice-blue-950 flex-1 p-8">
        <Outlet />
      </main>
    </div>
  )
}
