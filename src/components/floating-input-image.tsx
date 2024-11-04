import * as React from 'react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const FloatingInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        type="file" // Certifique-se de que o tipo é 'file'
        accept="image/*" // Aceitar apenas imagens
        className={cn('hidden', className)} // Esconder o input padrão
        ref={ref}
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
}

const FloatingLabelInput = React.forwardRef<
  React.ElementRef<typeof FloatingInput>,
  React.PropsWithoutRef<FloatingLabelInputProps>
>(({ id, label, helpText, ...props }, ref) => {
  const [imagePreview, setImagePreview] = React.useState<string | null>(null)
  const [fileName, setFileName] = React.useState<string | null>(null)

  // Função para lidar com a seleção de imagem
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      setFileName(file.name) // Define o nome do arquivo
    } else {
      setImagePreview(null)
      setFileName(null) // Limpa o nome do arquivo se nenhum arquivo foi selecionado
    }
  }

  return (
    <div className="relative">
      <FloatingInput
        ref={ref}
        id={id}
        onChange={handleImageChange} // Chama a função ao mudar
        {...props}
      />
      <FloatingLabel htmlFor={id}>{label}</FloatingLabel>

      {/* Botão personalizado para acionar o input escondido */}
      <label htmlFor={id} className="mt-2 inline-block cursor-pointer">
        <span className="bg-venice-blue-900 text-white py-2 px-4 rounded-md">
          Escolher Imagem
        </span>
      </label>

      {helpText && <p className="text-sm text-gray-500 mt-1">{helpText}</p>}

      {/* Exibição da pré-visualização da imagem */}
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Pré-visualização"
          className="mt-2 h-32 w-full object-cover rounded border border-gray-300"
        />
      )}

      {/* Exibição do nome do arquivo */}
      {fileName && (
        <p className="mt-2 text-gray-600">
          Arquivo: <strong>{fileName}</strong>
        </p>
      )}
    </div>
  )
})
FloatingLabelInput.displayName = 'FloatingLabelInput'

export { FloatingInput, FloatingLabel, FloatingLabelInput }
