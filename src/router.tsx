import { Routes, Route, Navigate } from 'react-router-dom'
import { DefaultLayout } from '@/layouts/default-layout'
import { ManagersTasks } from './pages/managers-tasks/managers-tasks'
import { Invoicing } from './pages/invoicing/invoicing'
import { Losses } from './pages/losses/losses'
import { Login } from './pages/login/login'
import { Managers } from './pages/managers/managers'

export function Router() {
  return (
    <Routes>
      <Route path="" element={<Navigate to={'/login'} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="invoicing" element={<Invoicing />} />
        <Route path="managers-tasks" element={<ManagersTasks />} />
        <Route path="managers" element={<Managers />} />
        <Route path="losses" element={<Losses />} />
      </Route>
    </Routes>
  )
}
