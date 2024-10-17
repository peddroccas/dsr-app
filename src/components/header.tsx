import SRLogo from '@/assets/sao-rafael-icon.svg'

import User from './user'
import Sidebar from './sidebar'

export function Header() {
  return (
    <header className="flex px-4 justify-between">
      <div className="flex items-center">
        <Sidebar />
        <img className="max-w-16 max-h-16" src={SRLogo} alt="sr-logo" />
      </div>
      <User />
    </header>
  )
}
