import { useManager } from '@/hooks/use-manager'
import { ManagerCard } from './manager-card'

export function ManagersCards() {
  const { managers } = useManager()

  if (!managers) {
    return <></>
  }

  return managers.map(manager => (
    <ManagerCard key={manager.id} manager={manager} />
  ))
}
