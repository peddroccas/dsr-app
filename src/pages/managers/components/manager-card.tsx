import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { user } from '@/types'

interface ManagerCardProps {
  manager: user & { store: string }
}

export function ManagerCard({ manager }: ManagerCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>GERENTE</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{manager.name}</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}
