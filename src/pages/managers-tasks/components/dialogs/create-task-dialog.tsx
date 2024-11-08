import { useAuth } from '@/hooks/use-auth'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { FloatingLabelInput as Input } from '@/components/ui/floating-input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Plus } from '@phosphor-icons/react'
import { useManagersTasks } from '@/hooks/use-managers-tasks'
import { createTask } from '@/services/http/create-task'

// Esquema de validação com Zod
const createTaskSchema = z.object({
  title: z.string({ message: 'Título inválido' }).min(1, 'Título inválido'),
  weeklyFrequency: z.coerce
    .number()
    .min(1, 'Frequência deve estar entre 1 e 7')
    .max(7, 'Frequência deve estar entre 1 e 7'),
})

export default function CreateTaskDialog() {
  const { token } = useAuth()
  const { refetchTasks, refetchPendingTasks } = useManagersTasks()
  const [hasCreatedNewTask, setHasCreatedNewTask] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const createTaskForm = useForm({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      title: '',
      weeklyFrequency: 1,
    },
  })

  // Função de criação da tarefa
  const handleCreateTask = async (data: {
    title: string
    weeklyFrequency: number
  }) => {
    setHasCreatedNewTask(true)
    try {
      await createTask({ ...data, token })
      refetchTasks()
      refetchPendingTasks()
      createTaskForm.reset()
      setIsOpen(false)
    } catch {
      // Tratamento de erro
    } finally {
      setHasCreatedNewTask(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className="rounded-xl">
        <Button
          className="flex w-full h-full bg-slate-50 hover:bg-slate-300 shadow shadow-black"
          size={'icon'}
        >
          <Plus className="text-venice-blue-950 !h-8 !w-8" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-slate-50">
        <DialogHeader>
          <DialogTitle className="text-venice-blue-950">
            Adicionar nova tarefa
          </DialogTitle>
        </DialogHeader>
        <Form {...createTaskForm}>
          <form
            onSubmit={createTaskForm.handleSubmit(handleCreateTask)}
            className="flex flex-col gap-4"
          >
            <FormField
              name="title"
              control={createTaskForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      className="border-slate-300 hover:border-venice-blue-900 focus:border-venice-blue-900"
                      label="Título"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="weeklyFrequency"
              control={createTaskForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      className="border-slate-300 hover:border-venice-blue-900 focus:border-venice-blue-900"
                      label="Frequência semanal"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={hasCreatedNewTask}
              size="lg"
              className="focus:!outline-venice-blue-950 w-full bg-venice-blue-900 text-slate-50 p-2 font-medium shadow shadow-black hover:!opacity-100 hover:!bg-venice-blue-950"
            >
              {hasCreatedNewTask ? (
                <Spinner className="text-slate-50" />
              ) : (
                'Cadastrar'
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
