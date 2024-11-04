import SRLogo from '@/assets/sao-rafael-logo.svg'
import { Button } from '@/components/ui/button'
import { FloatingLabelInput as Input } from '@/components/ui/floating-input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Spinner } from '@/components/ui/spinner'
import { useAuth } from '@/hooks/use-auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
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

  const loginForm = useForm({
    resolver: zodResolver(loginFormSchema),
  })
  const [hasSubmittedLogin, setHasSubmittedLogin] = useState<boolean>(false)

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    if (user) {
      navigate('/managers-tasks')
    }
  }, [user, navigate])

  const handleLogin = async () => {
    setHasSubmittedLogin(true)

    await login(email, password)
      .then(() => navigate('/managers-tasks'))
      .catch(error => {
        alert(error)
      })
      .finally(() => {
        setHasSubmittedLogin(false)
        loginForm.reset({
          password: '',
          email: '',
        })
      })
  }
  return (
    <div className="bg-venice-blue h-screen">
      <header className="relative flex justify-center items-center bg-slate-50 h-24">
        <img className="absolute max-h-48" src={SRLogo} alt="sr-logo" />
      </header>
      <main className="flex justify-center mt-28">
        <Form {...loginForm}>
          <form
            onSubmit={loginForm.handleSubmit(handleLogin)}
            className="flex w-80 flex-col gap-4 rounded-xl bg-slate-50 p-4 text-venice-blue-950 "
          >
            <h1 className="text-center text-2xl text-ignara">Login</h1>
            <FormField
              name="email"
              control={loginForm.control}
              rules={{
                required: true,
                value: email,
                onChange: e => setEmail(e.target.value),
              }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      id="email"
                      label="Email"
                      className="border-slate-300 hover:border-venice-blue-900 focus:border-venice-blue-900"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="password"
              control={loginForm.control}
              rules={{
                value: password,
                onChange: e => setPassword(e.target.value),
              }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      label="Senha"
                      className="border-slate-300 hover:border-venice-blue-900 focus:border-venice-blue-900"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="focus:!outline-venice-blue-950  w-full bg-venice-blue text-slate-50 p-2 font-medium shadow shadow-black hover:!opacity-100 hover:!bg-venice-blue-900"
              type="submit"
              size="lg"
            >
              {hasSubmittedLogin ? (
                <Spinner size={'large'} className="text-slate-50" />
              ) : (
                'Entrar'
              )}
            </Button>
          </form>
        </Form>
      </main>
    </div>
  )
}
