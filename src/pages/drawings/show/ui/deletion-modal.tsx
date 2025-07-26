import { Modal } from '~/shared/ui'

type Props = {
  children: React.ReactNode
  onDelete: () => void
}

export function DeletionModal({ children, onDelete }: Props) {
  return (
    <Modal
      title="Delete Drawing"
      description="Are you sure you want to delete this drawing?"
      okText="Delete"
      onCancelAction={() => {}}
      onOkAction={onDelete}
    >
      {children}
    </Modal>
  )
}
