import { TextField } from '@mui/material'
import type { HTMLInputTypeAttribute } from 'react'

interface InputProps {
  label: string
  type: HTMLInputTypeAttribute
}

export function Input({ label, type }: InputProps) {
  return (
    <TextField
      label={label}
      type={type}
      className="mui-input"
      slotProps={{
        inputLabel: { className: 'text-venice-blue' },
        input: {
          className: 'border-venice-blue rounded-xl text-venice-blue-900',
          classes: { notchedOutline: 'border-venice-blue' },
        },
      }}
    />
  )
}
