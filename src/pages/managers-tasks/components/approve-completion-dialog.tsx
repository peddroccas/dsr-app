import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useAuth } from '@/hooks/use-auth'
import { useManager } from '@/hooks/use-manager'
import { approveCompletion } from '@/services/http/approve-completion'
import { denieCompletion } from '@/services/http/denie-completion'
import type { completion } from '@/types'
import { Eye } from '@phosphor-icons/react'
import { useState } from 'react'

interface ApproveCompletionDialogProps {
  completion: completion
}

export function ApproveCompletionDialog({
  completion,
}: ApproveCompletionDialogProps) {
  const { token } = useAuth()
  const { refetchPendingCompletions, refetchApprovedCompletions } = useManager()
  const [isOpen, setIsOpen] = useState(false)

  const handleDeniedCompletion = async () => {
    await denieCompletion({ id: completion.id, token })
    refetchPendingCompletions()
    setIsOpen(false)
  }

  const handleApproveCompletion = async () => {
    await approveCompletion({ id: completion.id, token })
    refetchPendingCompletions()
    refetchApprovedCompletions()
    setIsOpen(false)
  }

  return (
    <div className="flex justify-center gap-2 rounded-xl">
      <Button
        className="bg-slate-50 hover:bg-slate-200"
        size={'icon'}
        onClick={() => setIsOpen(true)}
      >
        <Eye weight="bold" className="text-venice-blue-900" />
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-slate-50 max-w-5xl w-full p-8">
          <DialogHeader>
            <DialogTitle className="text-venice-blue-950">
              Imagem da Tarefa
            </DialogTitle>
          </DialogHeader>
          <img
            src={`data:image/png;base64,${completion.image}`}
            alt="Imagem da tarefa"
            className="max-w-full h-full"
          />
          <DialogFooter>
            <Button
              onClick={handleDeniedCompletion}
              className="bg-ignara hover:bg-ignara-600"
            >
              Recusar
            </Button>
            <Button
              onClick={handleApproveCompletion}
              className="bg-green-700 hover:bg-green-800"
            >
              Aprovar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
