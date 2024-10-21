import { Routes, Route, Navigate } from 'react-router-dom'
import { DefaultLayout } from '@/layouts/default-layout'
import { ManagersTasks } from './pages/managers-tasks/managers-tasks'
import { Invoicing } from './pages/invoincing/invoicing'
import { Losses } from './pages/losses/losses'
import { Login } from './pages/login/login'

export function Router() {
  return (
    <Routes>
      <Route path="" element={<Navigate to={'/login'} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="invoincing" element={<Invoicing />} />
        <Route path="managers-tasks" element={<ManagersTasks />} />
        <Route path="losses" element={<Losses />} />
      </Route>
    </Routes>
  )
}
