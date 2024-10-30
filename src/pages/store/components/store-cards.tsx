import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { useStore } from '@/hooks/use-store'
import CreateStoreDialog from './create-store-dialog'

export function StoreCards() {
  const { stores } = useStore()

  if (!stores) {
    return <></>
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-8 bg-venice-blue-900 p-8 rounded-md">
      {stores.map(store => (
        <Card
          key={store.id}
          className="hover:scale-105 transition-transform duration-300 cursor-pointer border border-slate-200 shadow-md rounded-lg overflow-hidden"
        >
          <CardHeader className="bg-venice-blue p-4 text-slate-50">
            <CardTitle className="text-lg font-semibold">
              {store.name}
            </CardTitle>
          </CardHeader>
        </Card>
      ))}
      <CreateStoreDialog />
    </div>
  )
}
