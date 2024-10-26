import { useAuth } from '@/hooks/use-auth'
import { useManager } from '@/hooks/use-manager'
import { createUser } from '@/services/http/create-user'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { StoreSelect } from '@/components/store-select'
import { FloatingLabelInput as Input } from '@/components/ui/floating-input'

interface CreateManagerDialogProps {
  open: boolean
  onClose: () => void
}

const createNewUserSchema = z.object({
  name: z.string({ message: 'Nome inválido' }),
  email: z.string({ message: 'Email inválido' }).email('Email inválido'),
})

export default function CreateManagerDialog({
  open,
  onClose,
}: CreateManagerDialogProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createNewUserSchema),
  })
  const { token } = useAuth()
  const { refetch } = useManager()

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [store, setStore] = useState<{ id: string }>()
  const [hasCreatedNewUser, setHasCreatedNewUser] = useState<boolean>(false)

  const handleCreateUser = async () => {
    setHasCreatedNewUser(true)

    const teste = await createUser({ name, email, role: 'MANAGER', token })
    console.log(teste)
    refetch()
    onClose()
    setHasCreatedNewUser(false)
  }
  return (
    <Dialog>
      <DialogContent>
        <DialogHeader className="w-full flex justify-center text-xl">
          Adicionar novo gerente
        </DialogHeader>
        <DialogContent>
          <form
            onSubmit={handleSubmit(handleCreateUser)}
            className="mt-2 flex flex-col gap-4 items-center"
          >
            <Controller
              name="name"
              control={control}
              rules={{
                value: name,
                onChange: e => setName(e.target.value),
              }}
              render={({ field }) => <Input {...field} />}
            />
            <Controller
              name="email"
              control={control}
              rules={{
                value: email,
                onChange: e => setEmail(e.target.value),
              }}
              render={({ field }) => (
                <Input {...field} label="Email" type="email" />
              )}
            />
            <Controller
              name="store"
              control={control}
              rules={{
                value: store,
                onChange: e => setStore(e.target.value),
              }}
              render={({ field }) => <StoreSelect {...field} />}
            />

            <Button
              type="submit"
              disabled={hasCreatedNewUser}
              size="lg"
              className="bg-venice-blue-950 rounded-2xl p-2 text-slate-50 hover:opacity-95 mb-4"
            >
              {hasCreatedNewUser ? (
                <Spinner className="text-slate-50" />
              ) : (
                'Cadastrar'
              )}
            </Button>
          </form>
        </DialogContent>
      </DialogContent>
    </Dialog>
  )
}
