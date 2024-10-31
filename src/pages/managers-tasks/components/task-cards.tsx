import { useManager } from '@/hooks/use-manager'
import CreateTaskDialog from './create-task-dialog'
import { Label } from '@/components/ui/label'
import Card from '@/components/card'

export function TaskCards() {
  const { tasks } = useManager()

  if (!tasks) {
    return <></>
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-8 bg-venice-blue-900 p-8 rounded-md">
      {tasks.map(task => (
        <Card key={task.id} title={task.title}>
          <article className="flex gap-2">
            <Label className="text-venice-blue-700 text-sm font-medium">
              Frequência Semanal:
            </Label>
            <p className="text-venice-blue-700 text-sm font-medium">
              {task.weeklyFrequency}
            </p>
          </article>
        </Card>
      ))}
      <CreateTaskDialog />
    </div>
  )
}
