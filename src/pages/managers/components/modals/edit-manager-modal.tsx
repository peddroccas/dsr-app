import { useAuth } from '@/hooks/use-auth'
import { useManager } from '@/hooks/use-manager'
import { updateManager } from '@/services/http/update-manager'
import type { user } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'

import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

interface EditManagerModalProps {
  open: boolean
  onClose: () => void
  manager: user
}

const EditManagerSchema = z.object({
  name: z.string({ message: 'Nome inválido' }),
  email: z.string({ message: 'Email inválido' }).email('Email inválido'),
})

export default function EditManagerModal({
  open,
  onClose,
  manager,
}: EditManagerModalProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(EditManagerSchema),
  })
  const { token } = useAuth()
  const { refetch } = useManager()

  const [name, setName] = useState<string>(manager.name)
  const [email, setEmail] = useState<string>(manager.email)
  const [store, setStore] = useState<{ id: string }>()
  const [hasEditManager, setHasEditManager] = useState<boolean>(false)

  const handleEditManager = async () => {
    setHasEditManager(true)

    await updateManager({
      id: manager.id,
      name,
      email,
      token,
    })
    refetch()
    onClose()
    setHasEditManager(false)
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
          Editando gerente
        </ModalHeader>
        <ModalBody>
          <form
            onSubmit={handleSubmit(handleEditManager)}
            className="mt-2 flex flex-col gap-4 items-center"
          >
            <Controller
              name="name"
              control={control}
              defaultValue={name}
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
              defaultValue={email}
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

            <Button
              type="submit"
              disabled={hasEditManager}
              size="lg"
              className="focus:!outline-venice-blue-950 bg-venice-blue-900 text-slate-50 p-2 font-medium shadow shadow-black hover:!opacity-100 hover:!bg-venice-blue-950"
            >
              {hasEditManager ? (
                <CircularProgress className="text-slate-50" />
              ) : (
                'Salvar'
              )}
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
