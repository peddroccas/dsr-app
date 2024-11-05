import { useAuth } from '@/hooks/use-auth'
import { useManagersTasks } from '@/hooks/use-managers-tasks'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
import { updatePassword } from '@/services/http/update-password'

const updatePasswordSchema = z.object({
  password: z
    .string({ message: 'Senha inválida' })
    .min(6, 'Mínimo de 6 caracteres'),
})

interface UpdatePasswordDialogProps {
  isOpen: boolean
  onOpenChange: () => void
}

export default function UpdatePasswordDialog({
  isOpen,
  onOpenChange,
}: UpdatePasswordDialogProps) {
  const updatePasswordForm = useForm({
    resolver: zodResolver(updatePasswordSchema),
  })
  const { token } = useAuth()

  const [password, setPassword] = useState<string>('')
  const [hasUpdatedPassword, setHasUpdatedPassword] = useState<boolean>(false)

  const handleCreateUser = async () => {
    setHasUpdatedPassword(true)

    await updatePassword({
      password,
      token,
    }).catch(() => {
      setHasUpdatedPassword(false)
    })
    updatePasswordForm.reset()
    onOpenChange()
    setHasUpdatedPassword(false)
  }
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-slate-50">
        <DialogHeader>
          <DialogTitle className="text-venice-blue-950">
            Mudar senha
          </DialogTitle>
        </DialogHeader>
        <Form {...updatePasswordForm}>
          <form
            onSubmit={updatePasswordForm.handleSubmit(handleCreateUser)}
            className="flex flex-col gap-4"
          >
            <FormField
              name="password"
              control={updatePasswordForm.control}
              rules={{
                value: password,
                onChange: e => setPassword(e.target.value),
              }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      className="border-slate-300 hover:border-venice-blue-900 focus:border-venice-blue-900"
                      label="Nova Senha"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={hasUpdatedPassword}
              size="lg"
              className="focus:!outline-venice-blue-950 w-full bg-venice-blue-900 text-slate-50 p-2 font-medium shadow shadow-black hover:!opacity-100 hover:!bg-venice-blue-950"
            >
              {hasUpdatedPassword ? (
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
