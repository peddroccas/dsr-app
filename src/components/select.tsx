import { Select, SelectItem } from '@nextui-org/react'
import type { ChangeEvent } from 'react'

interface SelectProps {
  value: string
  label: string
  size?: 'lg'
  options: string[]
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

export default function BasicSelect({
  options,
  onChange,
  value,
  size,
  label,
}: SelectProps) {
  return (
    <Select
      label={label}
      onChange={onChange}
      size={size}
      className="max-w-prose rounded-xl"
      value={value}
      classNames={{
        trigger:
          '!bg-transparent !border-venice-blue-950 !border hover:!border-2 focus:!border-2 focus:border-2 !ring-offset-0 !ring-0 ',
        label: '!text-venice-blue-950',
      }}
      selectedKeys={[value]}
    >
      {options.map(option => (
        <SelectItem key={option} value={option}>
          {option}
        </SelectItem>
      ))}
    </Select>
  )
}
