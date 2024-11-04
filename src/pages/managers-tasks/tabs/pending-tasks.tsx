import Card from '@/components/card'
import { useManagersTasks } from '@/hooks/use-managers-tasks'

export function PendingTasks() {
  const { pendingTasks } = useManagersTasks()

  if (!pendingTasks?.length) {
    return (
      <div className="grid h-full gap-8 bg-venice-blue-900 p-8 rounded-md">
        <h1 className="text-slate-50">Sem tarefas pendentes de aprovação</h1>
      </div>
    )
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-8 bg-venice-blue-900 p-8 rounded-md">
      {pendingTasks.map(user => (
        <Card
          className="hover:!scale-100 !cursor-default"
          key={user.manager.id}
          title={`${user.manager.name} - ${user.manager.store}`}
        >
          {user.remainingTasks.map(remainingTask => (
            <article className="flex flex-col" key={remainingTask.id}>
              <p>{remainingTask.title}</p>
              <section className="flex mx-6 text-slate-600 gap-3">
                <p>Restantes</p>
                <p>{remainingTask.remaining}</p>
              </section>
              <section className="flex mx-6 text-slate-600 gap-3">
                <p>Frequência semanal</p>
                <p>{remainingTask.weeklyFrequency}</p>
              </section>
            </article>
          ))}
        </Card>
      ))}
    </div>
  )
}
