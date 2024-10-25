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
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="" />
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
