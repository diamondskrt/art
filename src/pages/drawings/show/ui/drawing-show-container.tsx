'use client'

import { PencilIcon, TrashIcon } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

import {
  useDeleteDrawing,
  useGetDrawing,
  DrawingWithSwiper,
  DrawingSkeleton,
} from '~/entities/drawing'
import { Link, useRouter } from '~/shared/lib'
import { BreadcrumbItem, Breadcrumbs, Button } from '~/shared/ui'

import { DeletionModal } from './deletion-modal'

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
        <div className="flex flex-col md:flex-row gap-4">
          {drawingId && (
            <Link
              href={{
                pathname: '/drawings/[id]/edit',
                params: { id: drawingId },
              }}
            >
              <Button variant="outline" className="cursor-pointer">
                <PencilIcon className="w-4 h-4" />
                {t('actions.edit')}
              </Button>
            </Link>
          )}
          <DeletionModal onDelete={handleDelete}>
            <Button variant="destructive" className="cursor-pointer">
              <TrashIcon className="w-4 h-4" />
              {t('actions.delete')}
            </Button>
          </DeletionModal>
        </div>
      </div>
      <div>
        {isLoading ? (
          <DrawingSkeleton />
        ) : drawing ? (
          <DrawingWithSwiper drawing={drawing} />
        ) : (
          <div>Drawing not found</div>
        )}
      </div>
    </div>
  )
}
