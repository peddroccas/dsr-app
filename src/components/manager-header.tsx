import SRIcon from '@/assets/sao-rafael-icon.svg'
import User from './user'
//import { Drawer } from './admin-drawer'

export function Header() {
  return (
    <header className="bg-slate-50 flex px-4 justify-between items-center">
      <nav className="flex items-center">
        {/* <Drawer /> */}
        <img className="max-w-16 max-h-16" src={SRIcon} alt="sr-logo" />
      </nav>
      <User />
    </header>
  )
}
