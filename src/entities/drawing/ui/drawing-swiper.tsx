'use client'

import { useState } from 'react'
import { FreeMode, Thumbs } from 'swiper/modules'
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'

import { DrawingImage } from '~/entities/drawing'
import { OImage } from '~/shared/ui'

import type { Swiper as SwiperType } from 'swiper'

type SwiperProps = {
  images: DrawingImage[]
}

export function DrawingSwiper({ images }: SwiperProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  return (
    <div className="relative grid h-full w-full gap-2">
      {/* Main Swiper */}
      <SwiperComponent
        modules={[Thumbs]}
        slidesPerView={1}
        spaceBetween={8}
        thumbs={{ swiper: thumbsSwiper }}
        className="aspect-square w-full"
      >
        {images.map(({ $id, url, name }) => (
          <SwiperSlide key={$id}>
            <div className="relative h-full w-full overflow-hidden rounded">
              <OImage src={url} alt={name} fill />
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
        className="h-[100px] w-full"
      >
        {images.map(({ $id, url, name }) => (
          <SwiperSlide key={$id} className="swiper-slide-thumb">
            <div className="relative h-full w-full overflow-hidden rounded">
              <OImage src={url} alt={name} fill />
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  )
}
