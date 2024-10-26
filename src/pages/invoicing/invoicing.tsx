import { StoreSelect } from '@/components/store-select'
import { useState } from 'react'

export function Invoicing() {
  const [selectedStore, setSelectedStore] = useState<string>('')
  return (
    <div>
      <StoreSelect value={selectedStore} onChange={e => setSelectedStore(e)} />
    </div>
  )
}
