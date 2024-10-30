import { StoreCards } from './components/store-cards'

export default function Stores() {
  return (
    <div className="bg-venice-blue-950 flex flex-col gap-8">
      <header className="flex justify-between px-8">
        <h1 className="text-ignara-400 text-4xl">Lojas</h1>
      </header>
      <StoreCards />
    </div>
  )
}
