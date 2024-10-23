import SRLogo from '@/assets/sao-rafael-logo.svg'
import { useAuth } from '@/hooks/use-auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, CircularProgress, Input } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

const loginFormSchema = z.object({
  email: z.string({ message: 'Email inválido' }).email('Email inválido'),
  password: z
    .string({ message: 'Senha inválida' })
    .min(6, 'Mínimo 6 caracteres'),
})

export function Login() {
  const { user, login } = useAuth()
  const navigate = useNavigate()

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  })
  const [hasSubmittedLogin, setHasSubmittedLogin] = useState<boolean>(false)

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    if (user) {
      navigate('/invoicing')
    }
  }, [user, navigate])

  const handleLogin = async () => {
    setHasSubmittedLogin(true)

    await login(email, password)
      .then(() => navigate('/invoicing'))
      .catch(error => {
        alert(error)
      })
      .finally(() => {
        setHasSubmittedLogin(false)
        reset({
          password: '',
          email: '',
        })
      })
  }
  return (
    <div className="bg-venice-blue-950 h-screen">
      <header className="relative flex justify-center items-center bg-slate-50 h-24">
        <img className="absolute max-h-48" src={SRLogo} alt="sr-logo" />
      </header>
      <main className="flex justify-center mt-28">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex w-80 flex-col gap-4 rounded-xl bg-slate-50 p-4 text-venice-blue-950 "
        >
          <h1 className="text-center text-2xl text-ignara">Login</h1>
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
              value: email,
              onChange: e => setEmail(e.target.value),
            }}
            render={({ field }) => (
              <Input
                label="Email"
                classNames={{
                  inputWrapper:
                    '!bg-transparent !border-venice-blue-950 !border hover:!border-2 focus:!border-2 !ring-offset-0 !ring-0 ',
                  input: '!text-venice-blue-950',
                  label: '!text-venice-blue-950',
                }}
                {...field}
                isInvalid={Boolean(errors.email)}
                errorMessage={String(errors.email?.message)}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            rules={{
              value: password,
              onChange: e => setPassword(e.target.value),
            }}
            render={({ field }) => (
              <Input
                label="Senha"
                type="password"
                classNames={{
                  inputWrapper:
                    '!bg-transparent !border-venice-blue-950 !border hover:!border-2 focus:!border-2 focus:border-2 !ring-offset-0 !ring-0 ',
                  input: '!text-venice-blue-950',
                  label: '!text-venice-blue-950',
                }}
                {...field}
                isInvalid={Boolean(errors.password)}
                errorMessage={String(errors.password?.message)}
              />
            )}
          />
          <Button
            variant="solid"
            className="focus:!outline-venice-blue-950  w-full bg-venice-blue-900 text-slate-50 p-2 font-medium shadow shadow-black hover:!opacity-100 hover:!bg-venice-blue-950"
            type="submit"
            size="lg"
          >
            {hasSubmittedLogin ? <CircularProgress /> : 'Entrar'}
          </Button>
        </form>
      </main>
    </div>
  )
}
