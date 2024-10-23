import { Select } from '@/components/select'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  CircularProgress,
  IconButton,
  InputLabel,
} from '@mui/material'
import { ArrowCircleRight } from '@phosphor-icons/react'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

interface CreateManagerDialogProps {
  open: boolean
  onClose: () => void
}

const createNewUserSchema = z.object({
  name: z.string(),
  email: z.string({ message: 'Email inválido' }).email('Email inválido'),
})

export default function CreateManagerDialog({
  open,
  onClose,
}: CreateManagerDialogProps) {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createNewUserSchema),
  })

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [store, setStore] = useState<string>('')
  const [hasCreatedNewUser, setHasCreatedNewUser] = useState<boolean>(false)

  const handleCreateUser = async () => {
    setHasCreatedNewUser(true)
    console.log('draven')
  }
  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{ paper: 'bg-venice-slate-50 rounded-xl' }}
    >
      <DialogTitle className="text-center">Adicionar novo gerente</DialogTitle>
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
            render={({ field }) => (
              <Input
                type="text"
                {...field}
                label="Nome"
                props={{
                  error: Boolean(errors.name),
                  helperText: errors.name ? String(errors.name?.message) : '',
                }}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{
              value: email,
              onChange: e => setEmail(e.target.value),
            }}
            render={({ field }) => (
              <Input
                {...field}
                label="Email"
                type="email"
                props={{
                  error: Boolean(errors.email),
                  helperText: errors.email ? String(errors.email?.message) : '',
                }}
              />
            )}
          />
          <Controller
            name="store"
            control={control}
            rules={{
              value: store,
              onChange: e => setStore(e.target.value),
            }}
            render={({ field }) => (
              <div>
                <InputLabel id="store">Age</InputLabel>
                <Select id="store" {...field} label="Loja" />
              </div>
            )}
          />

          <Button
            type="submit"
            disabled={hasCreatedNewUser}
            className="bg-venice-blue-950 rounded-2xl p-2 text-slate-50 hover:opacity-95"
          >
            {hasCreatedNewUser ? (
              <CircularProgress className="text-slate-50" />
            ) : (
              'Cadastrar'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
