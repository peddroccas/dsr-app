import Select from '@/components/select'
import { useAuth } from '@/hooks/use-auth'
import { useManager } from '@/hooks/use-manager'
import { createUser } from '@/services/http/create-user'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Button,
  CircularProgress,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from '@nextui-org/react'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

interface CreateManagerModalProps {
  open: boolean
  onClose: () => void
}

const createNewUserSchema = z.object({
  name: z.string({ message: 'Nome inválido' }),
  email: z.string({ message: 'Email inválido' }).email('Email inválido'),
})

export default function CreateManagerModal({
  open,
  onClose,
}: CreateManagerModalProps) {
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
    <Modal
      isOpen={open}
      placement="center"
      onClose={onClose}
      className="!bg-venice-slate-50 rounded-xl"
    >
      <ModalContent>
        <ModalHeader className="w-full flex justify-center text-xl">
          Adicionar novo gerente
        </ModalHeader>
        <ModalBody>
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
                  isInvalid={Boolean(errors.name)}
                  errorMessage={String(errors.name?.message)}
                  classNames={{
                    inputWrapper:
                      '!bg-transparent !border-venice-blue-950 !border hover:!border-2 focus:!border-2 focus:border-2 !ring-offset-0 !ring-0 ',
                    input: '!text-venice-blue-950',
                    label: '!text-venice-blue-950',
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
                  isInvalid={Boolean(errors.email)}
                  errorMessage={String(errors.email?.message)}
                  classNames={{
                    inputWrapper:
                      '!bg-transparent !border-venice-blue-950 !border hover:!border-2 focus:!border-2 focus:border-2 !ring-offset-0 !ring-0 ',
                    input: '!text-venice-blue-950',
                    label: '!text-venice-blue-950',
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
                <Select
                  options={['São Rafael', 'Estrela', 'São Rafael 2', 'Antunes']}
                  {...field}
                  label="Loja"
                />
              )}
            />

            <Button
              type="submit"
              disabled={hasCreatedNewUser}
              size="lg"
              className="bg-venice-blue-950 rounded-2xl p-2 text-slate-50 hover:opacity-95 mb-4"
            >
              {hasCreatedNewUser ? (
                <CircularProgress className="text-slate-50" />
              ) : (
                'Cadastrar'
              )}
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
