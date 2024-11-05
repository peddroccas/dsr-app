import * as React from 'react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const FloatingInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, onChange, ...props }, ref) => {
    // Gerenciamento do evento onChange para conversão Base64

    return (
      <Input
        type="file" // Certifique-se de que o tipo é 'file'
        accept="image/*" // Aceitar apenas imagens
        className={cn('hidden', className)} // Esconder o input padrão
        ref={ref}
        onChange={onChange} // Conversão em Base64
        {...props}
      />
    )
  }
)
FloatingInput.displayName = 'FloatingInput'

const FloatingLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
  return (
    <Label
      className={cn(
        'peer-focus:secondary absolute start-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-slate-50 px-2 text-sm text-slate-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-background rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 cursor-text',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
FloatingLabel.displayName = 'FloatingLabel'

type FloatingLabelInputProps = InputProps & {
  label?: string
  helpText?: string
  fileName?: string // Adicionado para armazenar o nome do arquivo
}

const FloatingLabelInput = React.forwardRef<
  React.ElementRef<typeof FloatingInput>,
  React.PropsWithoutRef<FloatingLabelInputProps>
>(({ id, label, helpText, fileName, ...props }, ref) => {
  return (
    <div className="relative">
      <FloatingInput ref={ref} id={id} {...props} />
      <FloatingLabel htmlFor={id}>{label}</FloatingLabel>

      {/* Botão personalizado para acionar o input escondido */}
      <label htmlFor={id} className="mt-2 inline-block cursor-pointer">
        <span className="bg-venice-blue-900 text-slate-50 py-2 px-4 rounded-md">
          {props.content}
        </span>
      </label>

      {helpText && <p className="text-sm text-gray-500 mt-1">{helpText}</p>}
    </div>
  )
})
FloatingLabelInput.displayName = 'FloatingLabelInput'

export { FloatingInput, FloatingLabel, FloatingLabelInput }
