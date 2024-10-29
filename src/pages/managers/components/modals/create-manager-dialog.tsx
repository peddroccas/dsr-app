import { useAuth } from '@/hooks/use-auth'
import { useManager } from '@/hooks/use-manager'
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
import { StoreSelect } from '@/components/store-select'
import { FloatingLabelInput as Input } from '@/components/ui/floating-input'
import { Form, FormControl, FormItem, FormMessage } from '@/components/ui/form'
import { Plus } from '@phosphor-icons/react'
import { createManager } from '@/services/http/create-manager'

const createNewUserSchema = z.object({
  name: z.string({ message: 'Nome inválido' }),
  email: z.string({ message: 'Email inválido' }).email('Email inválido'),
})

export default function CreateManagerDialog() {
  const createManagerForm = useForm({
    resolver: zodResolver(createNewUserSchema),
  })
  const { token } = useAuth()
  const { refetch } = useManager()

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [store, setStore] = useState<string>('')
  const [hasCreatedNewUser, setHasCreatedNewUser] = useState<boolean>(false)

  const handleCreateUser = async () => {
    setHasCreatedNewUser(true)

    await createManager({
      name,
      email,
      storeId: store,
      token,
    }).catch(() => {
      setHasCreatedNewUser(false)
    })
    console.log(store)
    refetch()
    setHasCreatedNewUser(false)
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
            Adicionar novo gerente
          </DialogTitle>
        </DialogHeader>
        <Form {...createManagerForm}>
          <form
            onSubmit={createManagerForm.handleSubmit(handleCreateUser)}
            className="flex flex-col gap-4"
          >
            <Controller
              name="name"
              control={createManagerForm.control}
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
            <Controller
              name="email"
              control={createManagerForm.control}
              rules={{
                value: email,
                onChange: e => setEmail(e.target.value),
              }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="border-slate-300 hover:border-venice-blue-900 focus:border-venice-blue-900"
                      label="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Controller
              name="store"
              control={createManagerForm.control}
              rules={{
                value: store,
                onChange: e => setStore(e.target.value),
              }}
              render={({ field }) => <StoreSelect {...field} />}
            />
            <DialogClose>
              <Button
                type="submit"
                disabled={hasCreatedNewUser}
                size="lg"
                className="focus:!outline-venice-blue-950 w-full bg-venice-blue-900 text-slate-50 p-2 font-medium shadow shadow-black hover:!opacity-100 hover:!bg-venice-blue-950"
              >
                {hasCreatedNewUser ? (
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
