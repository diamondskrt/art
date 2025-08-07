'use client'

import Image from 'next/image'
import { useState } from 'react'

import { useGetDrawings } from '~/entities/drawing'
import { OImage, Skeleton } from '~/shared/ui'
import { cn } from '~/shared/utils'

import { SlidesGallery } from './slides-gallery'

type Props = React.HTMLAttributes<HTMLDivElement>

export function DrawingSlidesGallery({ className }: Props) {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const openSwiperGallery = (index: number) => {
    setOpen(true)
    setActiveIndex(index)
  }

  const { data, isLoading } = useGetDrawings()

  const drawings = data?.drawings || []

  if (isLoading) {
    return (
      <div
        className={cn(
          'grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4',
          className
        )}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-md overflow-hidden"
          >
            <Skeleton className="h-full w-full" />
          </div>
        ))}
      </div>
    )
  }

  return drawings.length > 0 ? (
    <>
      <div
        className={cn(
          'grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4',
          className
        )}
      >
        {drawings.map(({ $id, images }, index) => {
          return (
            <div
              key={$id}
              className="relative aspect-square rounded-md overflow-hidden"
            >
              <OImage url={images[0].url} name={images[0].name} />
            </div>
          )
        })}
      </div>
      <SlidesGallery
        open={open}
        onOpenChangeAction={setOpen}
        images={drawings.map(({ images }) => images[0])}
        activeIndex={activeIndex}
      />
    </>
  ) : (
    <div>No drawings found</div>
  )
}
