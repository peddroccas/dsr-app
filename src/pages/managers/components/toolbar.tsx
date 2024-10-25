import type { user } from '@/types'
import { ArrowsLeftRight, PencilSimple, Trash } from '@phosphor-icons/react'
import { useState } from 'react'
import { DeleteManagerModal } from './modals/delete-manager-modal'
import EditManagerModal from './modals/edit-manager-modal'

interface ToolBarProps {
  manager: user
}
export default function ToolBar({ manager }: ToolBarProps) {
  const [isUserEditingManager, setIsUserEditingManager] =
    useState<boolean>(false)
  const [isUserDeletingManager, setIsUserDeletingManager] =
    useState<boolean>(false)
  const [isUserTransferingManager, setIsUserTransferingManager] =
    useState<boolean>(false)
  return (
    <div className="flex items-center justify-center gap-2">
      <EditManagerModal
        open={isUserEditingManager}
        manager={manager}
        onClose={() => setIsUserEditingManager(false)}
      />
      <DeleteManagerModal
        isOpen={isUserDeletingManager}
        onClose={() => setIsUserDeletingManager(false)}
        manager={manager}
      />
      {/* <TransferModal
        data={manager}
        isOpen={isUserTransferingManager}
        onClose={() => setIsUserTransferingManager(false)}
        type="Manager"
      /> */}
      <Tooltip
        content="Transferir de loja"
        placement="left"
        className="text-bunker-950"
        closeDelay={0}
      >
        <ArrowsLeftRight
          size={20}
          className="cursor-pointer duration-300 hover:opacity-60"
          onClick={() => setIsUserTransferingManager(true)}
        />
      </Tooltip>
      <PencilSimple
        size={20}
        className="cursor-pointer duration-300 hover:opacity-60"
        onClick={() => setIsUserEditingManager(true)}
      />

      <Trash
        size={20}
        className="cursor-pointer duration-300 hover:text-red-500"
        onClick={() => setIsUserDeletingManager(true)}
      />
    </div>
  )
}
