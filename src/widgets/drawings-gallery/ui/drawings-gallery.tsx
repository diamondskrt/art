'use client'

import Image from 'next/image'
import { useState } from 'react'

import { SwiperGallery } from '~/shared/ui'

export function DrawingsGallery() {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const openSwiperGallery = (index: number) => {
    setOpen(true)
    setActiveIndex(index)
  }

  const images = [
    '/assets/img/image-1.webp',
    '/assets/img/image-1.webp',
    '/assets/img/image-1.webp',
    '/assets/img/image-1.webp',
    '/assets/img/image-1.webp',
    '/assets/img/image-1.webp',
    '/assets/img/image-1.webp',
    '/assets/img/image-1.webp',
  ]

  return (
    <>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 mb-4">
        {images.map((image, index) => (
          <div key={index} className="relative h-[200px]">
            <Image
              src={image}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              alt="Picture of the author"
              className="object-cover"
              onClick={() => openSwiperGallery(index)}
            />
          </div>
        ))}
      </div>
      <SwiperGallery
        open={open}
        onOpenChangeAction={setOpen}
        images={images}
        activeIndex={activeIndex}
      />
    </>
  )
}
