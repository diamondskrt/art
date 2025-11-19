'use client'

import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core'
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from '@dnd-kit/sortable'
import { useEffect, useState } from 'react'

import { MAX_FILES } from '~/shared/config'
import { Uploader } from '~/shared/ui'

import { DrawingImage } from '../model'
import { DrawingSortableImageItem } from './drawing-sortable-image-item'

type SortableGridProps = {
  initialImages: DrawingImage[]
  onChangeAction?: (items: DrawingImage[]) => void
}

export function DrawingSortableGrid({
  initialImages,
  onChangeAction,
}: SortableGridProps) {
  const [items, setItems] = useState<DrawingImage[]>(initialImages)
  const diff = MAX_FILES - items.length

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((i) => i.$id === active.id)
        const newIndex = items.findIndex((i) => i.$id === over.id)
        const reorderedItems = arrayMove(items, oldIndex, newIndex).map(
          (item, index) => ({ ...item, order: index + 1 })
        )
        return reorderedItems
      })
    }
  }

  const handleDelete = (id: string) => {
    setItems((items) => items.filter((item) => item.$id !== id))
  }

  const handleUpload = async (uploadedFiles: File[]) => {
    const maxOrderIndex = items.reduce(
      (max, item) => Math.max(max, item.order),
      0
    )

    const newItems = uploadedFiles.map((file, index) => {
      const item = {
        $id: crypto.randomUUID(),
        name: file.name,
        url: URL.createObjectURL(file),
        type: file.type,
        size: file.size,
        file: file,
        order: maxOrderIndex + index + 1,
      }

      return item
    })

    setItems((items) => [...items, ...newItems])
  }

  useEffect(() => {
    onChangeAction?.(items)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={items.map((item) => item.$id)}
        strategy={rectSortingStrategy}
      >
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 xl:grid-cols-5">
          {items.map((item) => (
            <DrawingSortableImageItem
              key={item.$id}
              image={item}
              onDeleteAction={handleDelete}
            />
          ))}
          {diff > 0 && (
            <div className="relative aspect-square overflow-hidden rounded border border-dashed border-gray-300">
              <div className="flex h-full items-center justify-center">
                <Uploader maxFiles={diff} onUploadAction={handleUpload} />
              </div>
            </div>
          )}
        </div>
      </SortableContext>
    </DndContext>
  )
}
