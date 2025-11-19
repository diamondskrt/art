'use client'

import { Content } from '@radix-ui/react-dialog'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { DrawingImage } from '~/entities/drawing'
import {
  Button,
  Dialog,
  DialogOverlay,
  DialogPortal,
  DialogTitleHidden,
  OImage,
  Typography,
} from '~/shared/ui'

type SwiperGalleryProps = {
  open: boolean
  onOpenChangeAction: (open: boolean) => void
  images: DrawingImage[]
  activeIndex: number
}

export function SlidesGallery({
  open,
  onOpenChangeAction,
  images,
  activeIndex,
}: SwiperGalleryProps) {
  const swiperRef = useRef<SwiperClass | null>(null)
  const [currentIndex, setCurrentIndex] = useState(activeIndex)
  const [isBeginning, setIsBeginning] = useState(false)
  const [isEnd, setIsEnd] = useState(false)

  // Reset focus from button after opening the dialog
  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => {
        const activeEl = document.activeElement as HTMLElement | null
        activeEl?.blur()
      })
    }
  }, [open])

  return (
    <Dialog open={open} onOpenChange={onOpenChangeAction}>
      <DialogPortal data-slot="dialog-portal">
        <DialogOverlay className="bg-black/80" />
        <Content
          aria-describedby={undefined}
          data-slot="dialog-content"
          className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 w-full translate-x-[-50%] translate-y-[-50%] duration-200 md:w-[60%]"
        >
          <DialogTitleHidden />
          <div className="absolute top-1/2 left-0 z-10 -translate-y-1/2">
            <Button
              variant="ghost"
              className="cursor-pointer text-white hover:bg-transparent hover:text-white"
              disabled={isBeginning}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeftIcon className="size-6" />
            </Button>
          </div>
          <div className="relative">
            <Swiper
              slidesPerView={1}
              spaceBetween={8}
              initialSlide={activeIndex}
              onSwiper={(swiper) => {
                swiperRef.current = swiper
                setCurrentIndex(swiper.activeIndex)
                setIsBeginning(swiper.isBeginning)
                setIsEnd(swiper.isEnd)
              }}
              onSlideChange={(swiper) => {
                setCurrentIndex(swiper.activeIndex)
                setIsBeginning(swiper.isBeginning)
                setIsEnd(swiper.isEnd)
              }}
            >
              {images.map(({ $id, url, name }) => (
                <SwiperSlide key={$id}>
                  <div className="relative aspect-video w-full">
                    <OImage src={url} alt={name} fill />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="absolute -bottom-10 left-0 w-full">
              <Typography variant="p" className="mt-4 text-center text-white">
                {images[currentIndex].name}
              </Typography>
            </div>
          </div>
          <div className="absolute top-1/2 right-0 z-10 -translate-y-1/2">
            <Button
              variant="ghost"
              className="cursor-pointer text-white hover:bg-transparent hover:text-white"
              disabled={isEnd}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRightIcon className="size-6" />
            </Button>
          </div>
        </Content>
      </DialogPortal>
    </Dialog>
  )
}
