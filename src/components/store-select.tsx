import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useStore } from '@/hooks/use-store'

interface SelectProps {
  value: string
  size?: 'lg'
  onChange: (value: string) => void
}

export function StoreSelect({ value, onChange }: SelectProps) {
  const { stores } = useStore()

  if (!stores) {
    return <></>
  }

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="border-slate-300 hover:border-venice-blue-900 focus:border-venice-blue-900">
        <SelectValue placeholder="Selecione" />
      </SelectTrigger>
      <SelectContent className="bg-slate-50">
        {stores.map(store => (
          <SelectItem key={store.id} value={store.id}>
            {store.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
