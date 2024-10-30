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
import { updateManager } from '@/services/http/update-manager'
import type { user } from '@/types'
import { useStore } from '@/hooks/use-store'

const editNewUserSchema = z.object({
  name: z.string({ message: 'Nome inválido' }),
  email: z.string({ message: 'Email inválido' }).email('Email inválido'),
})

interface EditManagerDialogProps {
  manager: user & { store: string }
  trigger?: JSX.Element
}

export default function EditManagerDialog({
  manager,
  trigger,
}: EditManagerDialogProps) {
  const { stores } = useStore()
  const editManagerForm = useForm({
    resolver: zodResolver(editNewUserSchema),
  })
  const { token } = useAuth()
  const { refetch } = useManager()
  const [name, setName] = useState<string>(manager.name)
  const [email, setEmail] = useState<string>(manager.email)
  const [store, setStore] = useState<string>(
    stores!.find(store => store.name === manager.store)!.id
  )
  const [hasEditNewUser, setHasEditNewUser] = useState<boolean>(false)

  const handleEditUser = async () => {
    setHasEditNewUser(true)

    await updateManager({
      id: manager.id,
      name,
      email,
      token,
    }).catch(() => {
      setHasEditNewUser(false)
    })
    refetch()
    setHasEditNewUser(false)
  }
  return (
    <Dialog>
      <DialogTrigger className="rounded-xl">
        {trigger ? (
          trigger
        ) : (
          <Button
            className="flex w-full h-full bg-slate-50 hover:bg-slate-300 shadow shadow-black"
            size={'icon'}
          >
            <Plus className="text-venice-blue-950 !h-8 !w-8" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="bg-slate-50">
        <DialogHeader>
          <DialogTitle className="text-venice-blue-950">
            Editar gerente
          </DialogTitle>
        </DialogHeader>
        <Form {...editManagerForm}>
          <form
            onSubmit={editManagerForm.handleSubmit(handleEditUser)}
            className="flex flex-col gap-4"
          >
            <Controller
              name="name"
              control={editManagerForm.control}
              defaultValue={name}
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
              control={editManagerForm.control}
              defaultValue={email}
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
              control={editManagerForm.control}
              defaultValue={store}
              rules={{
                value: store,
                onChange: e => setStore(e.target.value),
              }}
              render={({ field }) => <StoreSelect {...field} />}
            />
            <DialogClose>
              <Button
                type="submit"
                disabled={hasEditNewUser}
                size="lg"
                className="focus:!outline-venice-blue-950 w-full bg-venice-blue-900 text-slate-50 p-2 font-medium shadow shadow-black hover:!opacity-100 hover:!bg-venice-blue-950"
              >
                {hasEditNewUser ? (
                  <Spinner className="text-slate-50" />
                ) : (
                  'Salvar'
                )}
              </Button>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
