import { Routes, Route, Navigate } from 'react-router-dom'
import { DefaultLayout } from '@/layouts/default-layout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="tasks" element={<></>} />
      </Route>
    </Routes>
  )
}
