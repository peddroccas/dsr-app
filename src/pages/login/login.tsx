import SRLogo from '@/assets/sao-rafael-logo.svg'
import { Input } from '@/components/input'

export function Login() {
  return (
    <div className="bg-venice-blue-950 h-screen">
      <header className="relative flex justify-center items-center bg-slate-50 h-24">
        <img className="absolute max-h-48" src={SRLogo} alt="sr-logo" />
      </header>
      <main className="flex justify-center m-16">
        <form className="flex flex-col gap-4 items-center bg-slate-50 w-fit p-4 rounded-xl">
          <h1 className="text-ignara font-semibold text-xl">ENTRAR</h1>
          <Input label="Email" type="email" />
          <Input label="Senha" type="password" />
        </form>
      </main>
    </div>
  )
}