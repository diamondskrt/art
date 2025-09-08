'use client'

import { useTranslations } from 'next-intl'

import { Modal } from '~/shared/ui'

type Props = {
  children: React.ReactNode
  onDeleteAction: () => void
}

export function DeletionModal({ children, onDeleteAction }: Props) {
  const t = useTranslations('ShowDrawingPage.deletionModal')

  return (
    <Modal
      title={t('title')}
      description={t('description')}
      okText={t('okText')}
      cancelText={t('cancelText')}
      onOkAction={onDeleteAction}
    >
      {children}
    </Modal>
  )
}
