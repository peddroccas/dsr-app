import SRLogo from '@/assets/sao-rafael-logo.svg'
import { Input } from '@/components/input'
import { useAuth } from '@/hooks/use-auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { CircularProgress, IconButton } from '@mui/material'
import { ArrowCircleRight } from '@phosphor-icons/react'
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
      <main className="flex justify-center m-16">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col gap-4 items-center bg-slate-50 w-fit p-4 rounded-xl"
        >
          <h1 className="text-ignara font-semibold text-xl">ENTRAR</h1>
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
            name="password"
            control={control}
            rules={{
              value: password,
              onChange: e => setPassword(e.target.value),
            }}
            render={({ field }) => (
              <Input
                {...field}
                label="Senha"
                type="password"
                props={{
                  error: Boolean(errors.password),
                  helperText: errors.password
                    ? String(errors.password?.message)
                    : '',
                }}
              />
            )}
          />
          <IconButton
            type="submit"
            disabled={hasSubmittedLogin}
            className="bg-venice-blue-950 rounded-2xl p-2 text-slate-50 hover:opacity-95"
          >
            {hasSubmittedLogin ? (
              <CircularProgress className="text-slate-50" />
            ) : (
              <ArrowCircleRight size={40} />
            )}
          </IconButton>
        </form>
      </main>
    </div>
  )
}
