'use client'

import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { useGetDrawing } from '~/entities/drawing'
import { UpdateDrawingForm } from '~/features/update-drawing-form'
import { BreadcrumbItem, Breadcrumbs } from '~/shared/ui'

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
      <Breadcrumbs items={breadcrumbItems} className="mb-8" />
      {isLoading ? (
        <div>Loading...</div>
      ) : drawing ? (
        <UpdateDrawingForm drawing={drawing} />
      ) : (
        <div>Drawing not found</div>
      )}
    </div>
  )
}
