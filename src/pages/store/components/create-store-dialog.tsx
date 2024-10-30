import { useAuth } from '@/hooks/use-auth'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { FloatingLabelInput as Input } from '@/components/ui/floating-input'
import { Form, FormControl, FormItem, FormMessage } from '@/components/ui/form'
import { Plus } from '@phosphor-icons/react'
import { createStore } from '@/services/http/create-store'
import { useStore } from '@/hooks/use-store'

const createNewStoreSchema = z.object({
  name: z.string({ message: 'Nome inválido' }),
})

export default function CreateStoreDialog() {
  const createStoreForm = useForm({
    resolver: zodResolver(createNewStoreSchema),
  })
  const { token } = useAuth()
  const { refetchStores } = useStore()

  const [name, setName] = useState<string>('')
  const [hasCreatedNewStore, setHasCreatedNewStore] = useState<boolean>(false)

  const handleCreateStore = async () => {
    setHasCreatedNewStore(true)

    await createStore({
      name,
      token,
    }).catch(() => {
      setHasCreatedNewStore(false)
    })
    refetchStores()
    setHasCreatedNewStore(false)
  }
  return (
    <Dialog>
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
            Adicionar nova loja
          </DialogTitle>
        </DialogHeader>
        <Form {...createStoreForm}>
          <form
            onSubmit={createStoreForm.handleSubmit(handleCreateStore)}
            className="flex flex-col gap-4"
          >
            <Controller
              name="name"
              control={createStoreForm.control}
              rules={{
                value: name,
                onChange: e => setName(e.target.value),
              }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="border-slate-300 hover:border-venice-blue-900 focus:border-venice-blue-900"
                      label="Nome"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogClose>
              <Button
                type="submit"
                disabled={hasCreatedNewStore}
                size="lg"
                className="focus:!outline-venice-blue-950 w-full bg-venice-blue-900 text-slate-50 p-2 font-medium shadow shadow-black hover:!opacity-100 hover:!bg-venice-blue-950"
              >
                {hasCreatedNewStore ? (
                  <Spinner className="text-slate-50" />
                ) : (
                  'Cadastrar'
                )}
              </Button>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
