import { Routes, Route, Navigate } from 'react-router-dom'
import { ManagersTasks } from './pages/managers-tasks/managers-tasks'
// import { Invoicing } from './pages/invoicing/invoicing'
import { Losses } from './pages/losses/losses'
import { Login } from './pages/login/login'
import { Managers } from './pages/managers/managers'
import Stores from './pages/store/stores'
import { AdminLayout } from './layouts/admin-layout'
import { ManagerLayout } from './layouts/manager-layout'
import { StoreProvider } from './contexts/store-context'
import ToDo from './pages/todo/to-do'

export function Router() {
  return (
    <Routes>
      <Route path="" element={<Navigate to={'/login'} />} />
      <Route path="/login" element={<Login />} />
      <Route path="admin/*" element={<AdminRoutes />} />
      <Route path="manager/*" element={<ManagerRoutes />} />
      {/* <Route path="invoicing" element={<Invoicing />} /> */}
    </Routes>
  )
}

function AdminRoutes() {
  return (
    <StoreProvider>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route path="managers-tasks" element={<ManagersTasks />} />
          <Route path="managers" element={<Managers />} />
          <Route path="stores" element={<Stores />} />
          <Route path="losses" element={<Losses />} />
        </Route>
        {/* Adicione outras rotas do admin aqui */}
      </Routes>
    </StoreProvider>
  )
}

function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ManagerLayout />}>
        <Route path="" element={<ToDo />} />
      </Route>

      {/* Adicione outras rotas do admin aqui */}
    </Routes>
  )
}
