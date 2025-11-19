'use client'

import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { useGetDrawing } from '~/entities/drawing'
import {
  UpdateDrawingForm,
  UpdateDrawingFormSkeleton,
} from '~/features/update-drawing-form'
import { BackButton, BreadcrumbItem, Breadcrumbs } from '~/shared/ui'

export function DrawingEditContainer() {
  const params = useParams()

  const id = params?.id

  const t = useTranslations('EditDrawingPage')

  const { data: drawing, isLoading } = useGetDrawing(id as string)

  const drawingId = drawing?.$id || ''

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: t('breadcrumbs.home'), href: '/home' },
    { label: t('breadcrumbs.drawings'), href: '/drawings/list' },
    { label: drawingId },
  ]

  return (
    <div className="container">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <Breadcrumbs items={breadcrumbItems} />
        <BackButton />
      </div>
      {isLoading ? (
        <UpdateDrawingFormSkeleton />
      ) : drawing ? (
        <UpdateDrawingForm drawing={drawing} />
      ) : (
        <div>Drawing not found</div>
      )}
    </div>
  )
}
