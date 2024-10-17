import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from '@nextui-org/react'
import { SignOut, UserCircle } from '@phosphor-icons/react'

export default function User() {
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end" className="bg-venice-blue-900">
        <DropdownTrigger>
          <Avatar
            as="button"
            className="transition-transform"
            classNames={{ base: 'bg-ignara-500', icon: 'text-slate-100' }}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions">
          <DropdownItem key="settings" startContent={<UserCircle size={20} />}>
            Meu perfil
          </DropdownItem>
          <DropdownItem
            key="logout"
            color="danger"
            startContent={<SignOut size={20} />}
          >
            Sair
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
