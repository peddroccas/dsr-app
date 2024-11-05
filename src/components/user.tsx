import { useAuth } from '@/hooks/use-auth'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { User as IconUser } from '@phosphor-icons/react'
import UpdatePasswordDialog from './update-password-dialog'
import { useState } from 'react'

export default function User() {
  const [isUserUpdatingPassword, setIsUserUpdatingPassword] =
    useState<boolean>(false)
  const { logout } = useAuth()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-2 bg-venice-blue w-fit h-fit rounded-md text-stone-50 hover:ring-0">
        <IconUser size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setIsUserUpdatingPassword(true)}>
          Mudar senha
        </DropdownMenuItem>
        <DropdownMenuItem onClick={logout} className="bg-ignara text-slate-50">
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
      <UpdatePasswordDialog
        isOpen={isUserUpdatingPassword}
        onOpenChange={() => setIsUserUpdatingPassword(!isUserUpdatingPassword)}
      />
    </DropdownMenu>
  )
}
