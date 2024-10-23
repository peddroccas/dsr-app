import SRLogo from '@/assets/sao-rafael-logo.svg'
import { IconButton, Drawer as MUIDrawer } from '@mui/material'
import {
  CurrencyDollar,
  List,
  ListChecks,
  TrendDown,
  Users,
} from '@phosphor-icons/react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function Drawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const menuItems = [
    {
      name: 'Checklist Gerencial',
      link: '/managers-tasks',
      icon: <ListChecks size={24} />,
    },
    {
      name: 'Faturamento',
      link: '/invoincing',
      icon: <CurrencyDollar size={24} />,
    },
    {
      name: 'Perdas',
      link: '/losses',
      icon: <TrendDown size={24} />,
    },
    {
      name: 'Gerentes',
      link: '/managers',
      icon: <Users size={24} />,
    },
  ]
  return (
    <div>
      <IconButton onClick={() => setIsDrawerOpen(true)}>
        <List />
      </IconButton>
      <MUIDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        classes={{ paper: 'bg-venice-blue-950 gap-3' }}
      >
        <header className="bg-slate-50">
          <img className="w-full max-h-32" src={SRLogo} alt="sr-logo" />
        </header>
        <main className="flex flex-col p-4 gap-2">
          {menuItems.map(item => (
            <NavLink
              key={item.name}
              className={({ isActive }) =>
                `flex items-center text-center gap-2 p-3 transition-colors duration-300 rounded-xl ${
                  isActive
                    ? 'font-semibold text-venice-blue-950 bg-slate-50 '
                    : 'text-slate-50 hover:bg-venice-blue-900'
                }`
              }
              to={item.link}
              onClick={() => setIsDrawerOpen(false)}
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </main>
      </MUIDrawer>
    </div>
  )
}
