import {
  MenuItem,
  Select as MUISelect,
  type SelectChangeEvent,
} from '@mui/material'
import type { SelectInputProps } from '@mui/material/Select/SelectInput'
import { forwardRef } from 'react'

interface SelectProps {
  id: string
  label: string
  options?: string[]
  value: string
  onChange: (e: SelectChangeEvent) => void
  props?: SelectInputProps
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ id, label, value, onChange, props, options }, ref) => {
    return (
      <MUISelect
        {...props}
        ref={ref}
        labelId={id}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </MUISelect>
    )
  }
)
