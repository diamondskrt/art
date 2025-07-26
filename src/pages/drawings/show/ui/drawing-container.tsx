'use client'

import { PencilIcon, TrashIcon } from 'lucide-react'
import { useParams } from 'next/navigation'
import { toast } from 'sonner'

import { useDeleteDrawing, useGetDrawing } from '~/entities/drawing'
import { Drawing, DrawingSkeleton } from '~/features/drawing'
import { useRouter } from '~/shared/lib'
import { BreadcrumbItem, Breadcrumbs, Button } from '~/shared/ui'

import { DeletionModal } from './deletion-modal'

export function DrawingContainer() {
  const params = useParams()

  const id = params?.id

  const router = useRouter()

  const { data: drawing, isLoading } = useGetDrawing(id as string)

  const { mutate: deleteDrawing } = useDeleteDrawing(id as string)

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/home' },
    { label: 'Drawings', href: '/drawings/list' },
    { label: drawing?.$id || '-' },
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
      <div className="flex justify-between gap-4 mb-8">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="flex gap-4">
          <Button variant="outline" className="cursor-pointer">
            <PencilIcon className="w-4 h-4" />
            Edit
          </Button>
          <DeletionModal onDelete={handleDelete}>
            <Button variant="destructive" className="cursor-pointer">
              <TrashIcon className="w-4 h-4" />
              Delete
            </Button>
          </DeletionModal>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3">
        {isLoading ? (
          <DrawingSkeleton />
        ) : drawing ? (
          <Drawing drawing={drawing} />
        ) : (
          <div>Drawing not found</div>
        )}
      </div>
    </div>
  )
}
