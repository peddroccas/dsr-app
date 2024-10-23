import { TextField, type TextFieldProps } from '@mui/material'
import type { ChangeEvent, HTMLInputTypeAttribute } from 'react'
import { forwardRef } from 'react'

interface InputProps {
  value: unknown
  label: string
  type: HTMLInputTypeAttribute
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  props?: TextFieldProps
}

// Usando forwardRef para permitir o uso de refs
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, value, onChange, props }, ref) => {
    return (
      <TextField
        {...props}
        label={label}
        value={value}
        onChange={onChange}
        type={type}
        className="mui-input w-80"
        inputRef={ref} // Passando o ref para o TextField
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
)

// Nomeando a exibição do componente para facilitar a depuração
Input.displayName = 'Input'
