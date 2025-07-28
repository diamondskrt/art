'use client'

import { useParams } from 'next/navigation'

import { useGetDrawing } from '~/entities/drawing'
import { UpdateDrawingForm } from '~/features/update-drawing-form'
import { BreadcrumbItem, Breadcrumbs } from '~/shared/ui'

export function DrawingEditContainer() {
  const params = useParams()

  const id = params?.id

  const { data: drawing, isLoading } = useGetDrawing(id as string)

  const drawingId = drawing?.$id || ''

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/home' },
    { label: 'Drawings', href: '/drawings/list' },
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
