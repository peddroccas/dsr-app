import { Routes, Route } from 'react-router-dom'
import ManagersTasks from './pages/admin/managers-tasks/managers-tasks'
import { DefaultLayout } from '@/layouts/default-layout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<ManagersTasks />} />
      </Route>
    </Routes>
  )
}
