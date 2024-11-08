import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ManagersTasksProvider } from '@/contexts/manager-context'
import { TaskCards } from './components/task-cards'
import { PendingApproval } from './tabs/pending-approval'
import { Approved } from './tabs/approved'
import { PendingTasks } from './tabs/pending-tasks'

export function ManagersTasks() {
  return (
    <ManagersTasksProvider>
      <Tabs
        defaultValue="Pendentes de aprovação"
        className="w-full h-full flex flex-col sm:flex-row sm:items-start gap-8 justify-center items-center"
      >
        <TabsList className="grid sm:grid-rows-4  grid-cols-1 bg-inherit h-full gap-4 text-venice-blue-900 bg-slate-50 p-2 rounded">
          <TabsTrigger value="Pendentes de aprovação">
            Pendentes de aprovação
          </TabsTrigger>
          <TabsTrigger value="Não realizadas">Não realizadas</TabsTrigger>
          <TabsTrigger value="Aprovadas">Aprovadas</TabsTrigger>
          <TabsTrigger value="Tarefas">Tarefas</TabsTrigger>
        </TabsList>
        <TabsContent value="Tarefas" className="flex-1">
          <TaskCards />
        </TabsContent>
        <TabsContent value="Pendentes de aprovação" className="flex-1">
          <PendingApproval />
        </TabsContent>
        <TabsContent value="Não realizadas" className="flex-1">
          <PendingTasks />
        </TabsContent>
        <TabsContent value="Aprovadas" className="flex-1">
          <Approved />
        </TabsContent>
      </Tabs>
    </ManagersTasksProvider>
  )
}
