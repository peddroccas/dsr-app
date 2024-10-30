import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { useManager } from '@/hooks/use-manager'
import CreateTaskDialog from './create-task-dialog'
import { Label } from '@/components/ui/label'

export function TaskCards() {
  const { tasks } = useManager()

  if (!tasks) {
    return <></>
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-8 bg-venice-blue-900 p-8 rounded-md">
      {tasks.map(task => (
        <Card
          key={task.id}
          className="hover:scale-105 transition-transform duration-300 cursor-pointer  shadow-black rounded-lg overflow-hidden"
        >
          <CardHeader className="bg-venice-blue p-4 text-slate-50">
            <CardTitle className="text-lg font-semibold">
              {task.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 flex gap-2">
            <Label className="text-venice-blue-700 text-sm font-medium">
              Frequência Semanal:
            </Label>
            <p className="text-venice-blue-700 text-sm font-medium">
              {task.weeklyFrequency}
            </p>
          </CardContent>
        </Card>
      ))}
      <CreateTaskDialog />
    </div>
  )
}
