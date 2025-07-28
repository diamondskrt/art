'use client'

import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from '@dnd-kit/sortable'
import { useEffect, useState } from 'react'

import { MAX_FILES } from '~/shared/config'
import { Image } from '~/shared/model'

import { SortableImageItem } from './sortable-image-item'

type SortableGridProps = {
  initialImages: Image[]
  onChangeAction?: (items: Image[]) => void
}

export function SortableGrid({
  initialImages,
  onChangeAction,
}: SortableGridProps) {
  const [items, setItems] = useState<Image[]>(initialImages)
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
  }, [items])

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={items.map((item) => item.$id)}
        strategy={rectSortingStrategy}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {items.map((item) => (
            <SortableImageItem
              key={item.$id}
              image={item}
              onUploadAction={handleUpload}
              onDeleteAction={handleDelete}
            />
          ))}
          {diff > 0 && (
            <SortableImageItem onUploadAction={handleUpload} maxFiles={diff} />
          )}
        </div>
      </SortableContext>
    </DndContext>
  )
}
