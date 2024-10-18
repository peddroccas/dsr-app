import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '@/layouts/default-layout'
import { ManagersTasks } from './pages/managers-tasks/managers-tasks'

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
