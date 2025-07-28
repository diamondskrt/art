'use client'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical, TrashIcon } from 'lucide-react'
import NextImage from 'next/image'
import { HTMLAttributes } from 'react'

import { Image } from '~/shared/model'
import { Button, Uploader } from '~/shared/ui'

type Props = {
  image?: Image
  maxFiles?: number
  onUploadAction?: (files: File[]) => void
  onDeleteAction?: (id: string) => void
} & HTMLAttributes<HTMLDivElement>

export const SortableImageItem = ({
  image,
  onDeleteAction,
  onUploadAction,
  maxFiles,
  ...props
}: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: image?.$id ?? '' })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...props}>
      <div className="relative aspect-square border-dashed border border-gray-300 rounded overflow-hidden">
        {image ? (
          <>
            <div className="aspect-square relative">
              <NextImage
                src={image.url}
                alt={image.name}
                fill
                placeholder="blur"
                blurDataURL="/assets/img/placeholder.webp"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-background-foreground/30 flex justify-center items-center">
              <Button
                variant="outline"
                size="icon"
                className="cursor-pointer"
                onClick={() => onDeleteAction?.(image.$id)}
              >
                <TrashIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="actions absolute top-0 right-0 p-1">
              <Button
                variant="outline"
                size="icon"
                className="cursor-move"
                {...listeners}
              >
                <GripVertical className="w-4 h-4" />
              </Button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <Uploader maxFiles={maxFiles} onUploadAction={onUploadAction} />
          </div>
        )}
      </div>
    </div>
  )
}
