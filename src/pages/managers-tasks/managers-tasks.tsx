import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ManagerProvider } from '@/contexts/manager-context'
import { TaskCards } from './components/task-cards'
import PendingApproval from './components/pending-approval'

export function ManagersTasks() {
  return (
    <ManagerProvider>
      <Tabs
        defaultValue="Tarefas"
        className="w-full h-full flex flex-col sm:flex-row sm:items-start gap-8 justify-center items-center"
      >
        <TabsList className="grid sm:grid-rows-4  grid-cols-1 bg-inherit h-full gap-4 text-venice-blue-900 bg-slate-50 p-2 rounded">
          <TabsTrigger value="Pendentes de Aprovação">
            Pendentes de Aprovação
          </TabsTrigger>
          <TabsTrigger value="Não Realizadas">Não Realizadas</TabsTrigger>
          <TabsTrigger value="Aprovadas">Aprovadas</TabsTrigger>
          <TabsTrigger value="Tarefas">Tarefas</TabsTrigger>
        </TabsList>
        <TabsContent value="Tarefas" className="flex-1">
          <TaskCards />
        </TabsContent>
        <TabsContent value="Pendentes de Aprovação" className="flex-1">
          <PendingApproval />
        </TabsContent>
        <TabsContent value="São Rafael" className="flex-1">
          <div className="w-full">pedro</div>
        </TabsContent>
        <TabsContent value="Não Realizadas" className="flex-1">
          <div className="w-full">pedro</div>
        </TabsContent>
        <TabsContent value="Aprovadas" className="flex-1">
          <div className="w-full">pedro</div>
        </TabsContent>
        <TabsContent value="São Rafael 2" className="flex-1">
          <div className="w-full">pedro</div>
        </TabsContent>
      </Tabs>
    </ManagerProvider>
  )
}
