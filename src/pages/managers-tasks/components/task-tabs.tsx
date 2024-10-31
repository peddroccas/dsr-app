import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TaskCards } from './task-cards'

export default function TaskTabs() {
  return (
    <Tabs
      defaultValue="Tarefas"
      className="w-full h-full flex flex-col sm:flex-row sm:items-start gap-8 justify-center items-center"
    >
      <TabsList className="grid sm:grid-rows-6 sm:grid-cols-1 grid-cols-3 bg-inherit h-full gap-4 text-venice-blue-900 bg-slate-50 p-2 rounded">
        <TabsTrigger value="Tarefas">Tarefas</TabsTrigger>
        <TabsTrigger value="Todas">Todas</TabsTrigger>
        <TabsTrigger value="São Rafael">São Rafael</TabsTrigger>
        <TabsTrigger value="Estrela">Estrela</TabsTrigger>
        <TabsTrigger value="Antunes">Antunes</TabsTrigger>
        <TabsTrigger value="São Rafael 2">São Rafael 2</TabsTrigger>
      </TabsList>
      <TabsContent value="Tarefas" className="flex-1">
        <TaskCards />
      </TabsContent>
      <TabsContent value="Todas" className="flex-1">
        <div className="w-full">pedro</div>
      </TabsContent>
      <TabsContent value="São Rafael" className="flex-1">
        <div className="w-full">pedro</div>
      </TabsContent>
      <TabsContent value="Estrela" className="flex-1">
        <div className="w-full">pedro</div>
      </TabsContent>
      <TabsContent value="Antunes" className="flex-1">
        <div className="w-full">pedro</div>
      </TabsContent>
      <TabsContent value="São Rafael 2" className="flex-1">
        <div className="w-full">pedro</div>
      </TabsContent>
    </Tabs>
  )
}
