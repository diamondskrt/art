'use client'

import { PencilIcon, TrashIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Link, useAuth } from '~/shared/lib'
import { Button, Skeleton } from '~/shared/ui'

import { DeletionModal } from './deletion-modal'

export function DrawingShowActions({
  drawingId,
  isLoading,
  onDeleteAction,
}: {
  drawingId: string
  isLoading: boolean
  onDeleteAction: () => void
}) {
  const t = useTranslations('ShowDrawingPage.actions')
  const { user, isLoading: isAuthLoading } = useAuth()

  if (user && !user?.roles.includes('admin')) {
    return null
  }

  if (isLoading || isAuthLoading) {
    return (
      <div className="flex flex-col md:flex-row gap-4">
        <Skeleton className="w-full md:w-[140px] h-9" />
        <Skeleton className="w-full md:w-[140px] h-9" />
      </div>
    )
  }

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {drawingId && (
        <Button variant="outline" asChild>
          <Link
            href={{
              pathname: '/drawings/[id]/edit',
              params: { id: drawingId },
            }}
          >
            <PencilIcon className="w-4 h-4" />
            {t('edit')}
          </Link>
        </Button>
      )}
      <DeletionModal onDeleteAction={onDeleteAction}>
        <Button variant="destructive" className="cursor-pointer">
          <TrashIcon className="w-4 h-4" />
          {t('delete')}
        </Button>
      </DeletionModal>
    </div>
  )
}
