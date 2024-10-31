import { useStore } from '@/hooks/use-store'
import CreateStoreDialog from './create-store-dialog'
import Card from '@/components/card'

export function StoreCards() {
  const { stores } = useStore()

  if (!stores) {
    return <></>
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-8 bg-venice-blue-900 p-8 rounded-md">
      {stores.map(store => (
        <Card key={store.id} title={store.name} />
      ))}
      <CreateStoreDialog />
    </div>
  )
}
