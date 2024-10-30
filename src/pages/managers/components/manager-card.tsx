import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { user } from '@/types'

interface ManagerCardProps {
  manager: user & { store: string }
}

export function ManagerCard({ manager }: ManagerCardProps) {
  return (
    <Card className="hover:scale-105 transition-transform duration-300 cursor-pointer border border-slate-200 shadow-md shadow-black rounded-lg overflow-hidden">
      <CardHeader className="bg-venice-blue p-4 text-slate-50">
        <CardTitle className="text-lg font-semibold">{manager.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <p className="text-slate-700 text-sm font-medium">{manager.email}</p>
        <p className="text-slate-600 text-xs italic">{manager.store}</p>
      </CardContent>
    </Card>
  )
}
