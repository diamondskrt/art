'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Thumbs, FreeMode } from 'swiper/modules'
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'
import { DrawingImage } from '~/entities/drawing'

type SwiperProps = {
  images: DrawingImage[]
}

export function DrawingSwiper({ images }: SwiperProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  return (
    <div className="relative grid gap-2 h-full w-full">
      {/* Main Swiper */}
      <SwiperComponent
        modules={[Thumbs]}
        slidesPerView={1}
        spaceBetween={8}
        thumbs={{ swiper: thumbsSwiper }}
        className="w-full aspect-square"
      >
        {images.map(({ $id, url, name }) => (
          <SwiperSlide key={$id}>
            <div className="relative w-full h-full rounded overflow-hidden">
              <Image
                src={url}
                alt={name}
                fill
                placeholder="blur"
                blurDataURL="/assets/img/placeholder.webp"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>

      {/* Thumbnails Swiper */}
      <SwiperComponent
        modules={[Thumbs, FreeMode]}
        onSwiper={setThumbsSwiper}
        spaceBetween={8}
        slidesPerView={3}
        freeMode
        watchSlidesProgress
        className="w-full h-[100px]"
      >
        {images.map(({ $id, url, name }) => (
          <SwiperSlide key={$id} className="swiper-slide-thumb">
            <div className="relative w-full h-full rounded overflow-hidden">
              <Image
                src={url}
                alt={name}
                fill
                placeholder="blur"
                blurDataURL="/assets/img/placeholder.webp"
                className="object-cover"
                sizes="100px"
              />
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  )
}
