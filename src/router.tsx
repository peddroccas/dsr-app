import { Routes, Route } from 'react-router-dom'
import ManagersTasks from './pages/admin/managers-tasks/managers-tasks'
import { DefaultLayout } from '@/layouts/default-layout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="invoincing" element={<ManagersTasks />} />
        <Route path="managers-tasks" element={<ManagersTasks />} />
        <Route path="losses" element={<ManagersTasks />} />
      </Route>
    </Routes>
  )
}
