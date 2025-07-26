'use client'

import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitleHidden,
  Typography,
} from '~/shared/ui'

type SwiperGalleryProps = {
  open: boolean
  onOpenChangeAction: (open: boolean) => void
  images: string[]
  activeIndex: number
}

export function SwiperGallery({
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
      <DialogContent aria-describedby={undefined} className="max-w-[80%]">
        <DialogHeader closeButtonClassName="text-white -top-10">
          <DialogTitleHidden />
        </DialogHeader>
        <div className="flex items-center justify-between gap-4">
          <Button
            variant="ghost"
            className="text-white cursor-pointer hover:bg-transparent hover:text-white"
            disabled={isBeginning}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeftIcon className="size-6" />
          </Button>
          <div className="flex flex-col gap-4">
            <Swiper
              slidesPerView={1}
              initialSlide={activeIndex}
              className="h-[400px] w-[600px]"
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
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image}
                    alt="Image"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="text-center text-white">
              <Typography variant="p">
                Perito Moreno Glacier, Argentina No. 3, December 13th 2018
              </Typography>
              <Typography variant="small">
                20 x 31 1/4 inches, soft pastel on paper, 2020
              </Typography>
              <Typography variant="p">
                {currentIndex + 1} of {images.length}
              </Typography>
            </div>
          </div>
          <Button
            variant="ghost"
            className="text-white cursor-pointer hover:bg-transparent hover:text-white"
            disabled={isEnd}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRightIcon className="size-6" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
