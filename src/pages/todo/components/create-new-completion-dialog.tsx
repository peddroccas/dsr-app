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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { FloatingLabelInput as Input } from '@/components/floating-input-image'
import { createCompletion } from '@/services/http/create-completion'

// Esquema de validação com Zod
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
]
const createCompletionSchema = z.object({
  image: z
    .any()
    .refine(file => file instanceof File, { message: 'Campo inválido' })
    .refine(file => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: 'Insira uma imagem',
    }),
})

interface CreateCompletionDialogProps {
  taskId: string
  trigger?: JSX.Element
  refetch: () => void
}

export default function CreateCompletionDialog({
  trigger,
  taskId,
  refetch,
}: CreateCompletionDialogProps) {
  const { token } = useAuth()
  const [hasCreatedNewCompletion, setHasCreatedNewCompletion] =
    useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const createCompletionForm = useForm<{ image: File }>({
    resolver: zodResolver(createCompletionSchema),
  })

  // Função de criação da tarefa
  const handleCreateCompletion = async (data: { image: File }) => {
    setHasCreatedNewCompletion(true)
    console.log(data.image.name)
    const reader = new FileReader()
    reader.onloadend = async () => {
      const base64String = reader.result?.toString().split(',')[1] || ''
      try {
        await createCompletion({ taskId, image: base64String, token })
        refetch()
        createCompletionForm.reset()
        setIsOpen(false)
      } catch (error) {
        // Tratamento de erro
        console.error(error)
      } finally {
        setHasCreatedNewCompletion(false)
      }
    }

    reader.readAsDataURL(data.image)
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
              control={createCompletionForm.control}
              name="image"
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...fieldProps}
                      placeholder="Picture"
                      type="file"
                      content={value ? value.name : 'Selecione uma imagem'}
                      accept="image/*, application/pdf"
                      onChange={event => onChange(event.target.files?.[0])}
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
