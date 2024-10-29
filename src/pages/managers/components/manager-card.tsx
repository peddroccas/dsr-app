import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { user } from '@/types'

interface ManagerCardProps {
  manager: user & { store: string }
}

export function ManagerCard({ manager }: ManagerCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{manager.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{manager.email}</p>
        <p>{manager.store}</p>
      </CardContent>
    </Card>
  )
}
