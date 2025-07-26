'use client'

import Image from 'next/image'
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react'

type SwiperProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  images: any[]
}

export function Swiper({ images }: SwiperProps) {
  return (
    <SwiperComponent slidesPerView={1} className="h-full w-full">
      {images.map((image, $id) => (
        <SwiperSlide key={$id}>
          <Image
            src={image.url}
            alt={image.name}
            fill
            placeholder="blur"
            blurDataURL="/assets/img/placeholder.webp"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </SwiperSlide>
      ))}
    </SwiperComponent>
  )
}
