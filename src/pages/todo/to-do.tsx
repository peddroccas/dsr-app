import { useAuth } from '@/hooks/use-auth'
import { getPendingTasksByManager } from '@/services/http/get-pending-tasks-by-manager'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import Card from '@/components/card'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import CreateCompletionDialog from './components/create-new-completion-dialog'

dayjs.locale('pt-br')

export default function ToDo() {
  const { token } = useAuth()
  const { data: pendingTasks, refetch } = useQuery<
    {
      remaining: number
      id: string
      title: string
      weeklyFrequency: number
    }[]
  >({
    enabled: Boolean(token),
    queryKey: ['pendingTasks'],
    queryFn: async () => getPendingTasksByManager({ token }),
  })

  const [isManagerCompletingTask, setIsManagerCompletingTask] =
    useState<boolean>(false)

  const startOfWeek = dayjs().startOf('week')
  const endOfWeek = dayjs().endOf('week')

  if (!pendingTasks) {
    return <></>
  }

  return (
    <div className="py-10 max-w-[480] px-5 mx-auto flex flex-col gap-6">
      <header className="flex items-center ">
        <h1 className="text-slate-50 font-bold text-2xl">
          {startOfWeek.date()} a {endOfWeek.date()} de{' '}
          {endOfWeek.format('MMMM')}
        </h1>
      </header>
      <main className="grid h-full sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-8 bg-venice-blue-900 p-8 rounded-md">
        {pendingTasks.map(task => (
          <CreateCompletionDialog
            taskId={task.id}
            key={task.id}
            trigger={
              <Card
                onClick={() => setIsManagerCompletingTask(true)}
                key={task.id}
                title={task.title}
              >
                <article className="flex flex-col gap-2">
                  <section className="flex gap-2">
                    <Label className="text-venice-blue-700 text-sm font-medium">
                      Frequência Semanal:
                    </Label>
                    <p className="text-venice-blue-700 text-sm font-medium">
                      {task.weeklyFrequency}
                    </p>
                  </section>
                  <section className="flex gap-2">
                    <Label className="text-venice-blue-700 text-sm font-medium">
                      Restantes
                    </Label>
                    <p className="text-venice-blue-700 text-sm font-medium">
                      {task.remaining}
                    </p>
                  </section>
                </article>
              </Card>
            }
          />
        ))}
      </main>
    </div>
  )
}
