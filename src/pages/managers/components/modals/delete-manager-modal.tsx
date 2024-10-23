import { useAuth } from '@/hooks/use-auth'
import { deleteManager } from '@/services/http/delete-manager'
import type { user } from '@/types'
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react'

interface DeletemanagerFormModal {
  manager: user
  isOpen: boolean
  onClose: () => void
}

export function DeleteManagerModal({
  manager,
  isOpen,
  onClose,
}: DeletemanagerFormModal) {
  const { token } = useAuth()
  async function handleDeleteManager() {
    try {
      await deleteManager({ id: manager.id, token })
        .then(() => {})
        .finally(() => {
          onClose()
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="bg-venice-blue-950">
      <ModalContent>
        <ModalHeader>Deseja realmente deletar gerente?</ModalHeader>
        <ModalBody>{manager.name}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onClose}>
            Cancelar
          </Button>
          <Button color="danger" onClick={handleDeleteManager}>
            Deletar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
