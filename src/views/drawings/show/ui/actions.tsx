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

  if (!user?.roles.includes('admin')) {
    return null
  }

  if (isLoading || isAuthLoading) {
    return (
      <div className="flex flex-col gap-4 md:flex-row">
        <Skeleton className="h-9 w-full md:w-[140px]" />
        <Skeleton className="h-9 w-full md:w-[140px]" />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      {drawingId && (
        <Button variant="outline" asChild>
          <Link
            href={{
              pathname: '/drawings/[id]/edit',
              params: { id: drawingId },
            }}
          >
            <PencilIcon className="h-4 w-4" />
            {t('edit')}
          </Link>
        </Button>
      )}
      <DeletionModal onDeleteAction={onDeleteAction}>
        <Button variant="destructive" className="cursor-pointer">
          <TrashIcon className="h-4 w-4" />
          {t('delete')}
        </Button>
      </DeletionModal>
    </div>
  )
}
