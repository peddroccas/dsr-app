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

interface CreateCompletionDialogProps {
  taskId: string
  trigger?: JSX.Element
}
// Esquema de validação com Zod
const createCompletionSchema = z.object({
  image: z.coerce.string().base64(),
})

export default function CreateCompletionDialog({
  trigger,
  taskId,
}: CreateCompletionDialogProps) {
  const { token } = useAuth()
  const [hasCreatedNewCompletion, setHasCreatedNewCompletion] =
    useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const createCompletionForm = useForm({
    resolver: zodResolver(createCompletionSchema),
    defaultValues: {
      title: '',
      weeklyFrequency: 1,
    },
  })

  // Função de criação da tarefa
  const handleCreateCompletion = async (data: {
    title: string
    weeklyFrequency: number
  }) => {
    setHasCreatedNewCompletion(true)
    try {
      // await createCompletion({ ...data, token })
      // refetchCompletions()
      // refetchPendingCompletions()
      // createCompletionForm.reset()
      setIsOpen(false)
    } catch {
      // Tratamento de erro
    } finally {
      setHasCreatedNewCompletion(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className="rounded-xl">
        {trigger}
      </DialogTrigger>
      <DialogContent className="bg-slate-50">
        <DialogHeader>
          <DialogTitle className="text-venice-blue-950">
            Completar tarefa
          </DialogTitle>
        </DialogHeader>
        <Form {...createCompletionForm}>
          <form
            onSubmit={createCompletionForm.handleSubmit(handleCreateCompletion)}
            className="flex flex-col gap-4"
          >
            <FormField
              name="title"
              control={createCompletionForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      label="Imagem"
                      className="border-slate-300 hover:border-venice-blue-900 focus:border-venice-blue-900"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={hasCreatedNewCompletion}
              size="lg"
              className="focus:!outline-venice-blue-950 w-full bg-venice-blue-900 text-slate-50 p-2 font-medium shadow shadow-black hover:!opacity-100 hover:!bg-venice-blue-950"
            >
              {hasCreatedNewCompletion ? (
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
