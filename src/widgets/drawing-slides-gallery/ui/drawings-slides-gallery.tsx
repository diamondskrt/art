'use client'

import Image from 'next/image'
import { useState } from 'react'

import { useGetDrawings } from '~/entities/drawing'
import { Skeleton } from '~/shared/ui'
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

  const { data: drawings, isLoading } = useGetDrawings()

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

  return drawings && drawings.length > 0 ? (
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
              <Image
                src={images[0].url}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                alt="Picture of the author"
                className="object-cover cursor-pointer"
                onClick={() => openSwiperGallery(index)}
              />
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
