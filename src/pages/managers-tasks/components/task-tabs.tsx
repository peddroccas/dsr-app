import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TaskCards } from './task-cards'

export default function TaskTabs() {
  return (
    <Tabs defaultValue="Tarefas" className="w-full">
      <TabsList className="grid w-full grid-cols-6 bg-slate-50">
        <TabsTrigger value="Tarefas">Tarefas</TabsTrigger>
        <TabsTrigger value="Todas">Todas</TabsTrigger>
        <TabsTrigger value="São Rafael">São Rafael</TabsTrigger>
        <TabsTrigger value="Estrela">Estrela</TabsTrigger>
        <TabsTrigger value="Antunes">Antunes</TabsTrigger>
        <TabsTrigger value="São Rafael 2">São Rafael 2</TabsTrigger>
      </TabsList>
      <TabsContent value="Tarefas">
        <TaskCards />
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
