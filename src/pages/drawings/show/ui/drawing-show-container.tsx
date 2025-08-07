'use client'

import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

import {
  useDeleteDrawing,
  useGetDrawing,
  DrawingWithSwiper,
  DrawingWithSwiperSkeleton,
} from '~/entities/drawing'
import { useRouter } from '~/shared/lib'
import { BreadcrumbItem, Breadcrumbs } from '~/shared/ui'

import { DrawingShowActions } from './actions'

export function DrawingShowContainer() {
  const params = useParams()

  const t = useTranslations('ShowDrawingPage')

  const id = params?.id

  const router = useRouter()

  const { data: drawing, isLoading } = useGetDrawing(id as string)

  const drawingId = drawing?.$id || ''

  const { mutate: deleteDrawing } = useDeleteDrawing(id as string)

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: t('breadcrumbs.home'), href: '/home' },
    { label: t('breadcrumbs.drawings'), href: '/drawings/list' },
    { label: drawingId },
  ]

  const handleDelete = async () => {
    try {
      await deleteDrawing()
      toast.success('Drawing deleted successfully')
      router.push('/drawings/list')
    } catch (error) {
      toast.error((error as Error).message)
    }
  }

  return (
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <Breadcrumbs items={breadcrumbItems} />
        <DrawingShowActions
          drawingId={drawingId}
          isLoading={isLoading}
          onDeleteAction={handleDelete}
        />
      </div>
      <div>
        {isLoading ? (
          <DrawingWithSwiperSkeleton />
        ) : drawing ? (
          <DrawingWithSwiper drawing={drawing} />
        ) : (
          <div>Drawing not found</div>
        )}
      </div>
    </div>
  )
}
