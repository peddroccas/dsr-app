import SRLogo from '@/assets/sao-rafael-logo.svg'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import { List, ListChecks, Users } from '@phosphor-icons/react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from './ui/button'

export function Drawer() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const menuItems = [
    {
      name: 'Checklist Gerencial',
      link: '/managers-tasks',
      icon: <ListChecks size={24} />,
    },
    // {
    //   name: 'Faturamento',
    //   link: '/invoicing',
    //   icon: <CurrencyDollar size={24} />,
    // },
    // {
    //   name: 'Perdas',
    //   link: '/losses',
    //   icon: <TrendDown size={24} />,
    // },
    {
      name: 'Gerentes',
      link: '/managers',
      icon: <Users size={24} />,
    },
  ]
  return (
    <Sheet open={isSheetOpen} onOpenChange={() => setIsSheetOpen(!isSheetOpen)}>
      <SheetTrigger asChild>
        <Button
          className="bg-transparent hover:bg-slate-100"
          onClick={() => setIsSheetOpen(true)}
        >
          <List size={24} className="text-venice-blue-950" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-venice-blue-950">
        <SheetHeader className="bg-slate-50">
          <img className="w-full max-h-32" src={SRLogo} alt="sr-logo" />
        </SheetHeader>
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
              onClick={() => setIsSheetOpen(false)}
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </main>
      </SheetContent>
    </Sheet>
  )
}
