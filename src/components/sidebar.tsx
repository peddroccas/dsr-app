import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from '@nextui-org/react'
import { List } from '@phosphor-icons/react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    {
      permission: 'ADMIN',
      name: 'Tarefas dos Gerentes',
      link: '/managers-tasks',
    },
    { permission: 'ADMIN', name: 'Faturamento', link: '/' },
    { permission: 'ADMIN', name: 'Perdas', link: '/losses' },
  ]
  return (
    <Dropdown backdrop="opaque">
      <DropdownTrigger>
        <Button
          className="bg-slate-50"
          isIconOnly
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <List className="text-ignara-500" size={28} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Static Actions">
        {menuItems.map(item => (
          <DropdownItem
            key={item.name}
            className="duration-200 hover:border-ignara-400 hover:!bg-ignara-50"
          >
            <NavLink
              key={item.name}
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 transition-colors duration-300 ${
                  isActive ? ' font-bold text-ignara-500' : 'text-ignara-500'
                }`
              }
              to={item.link}
              onClick={() => setIsMenuOpen(false)} // Fecha o modal ao clicar no link
            >
              {item.name}
            </NavLink>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}
