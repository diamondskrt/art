import { useTranslations } from 'next-intl'

import type { Drawing } from '~/entities/drawing'
import { Typography } from '~/shared/ui'
import { cn, formatPrice } from '~/shared/utils'

import { DrawingSwiper } from './drawing-swiper'
import { useDrawingDimension } from '../lib'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  drawing: Drawing
}

export function DrawingWithSwiper({ drawing, className }: Props) {
  const { title, description, price, images, length, width, depth } = drawing

  const t = useTranslations('ShowDrawingPage.drawing')
  const { drawingDimensionStr } = useDrawingDimension({ length, width, depth })

  return (
    <div
      className={cn(
        'relative flex w-full flex-col gap-4 md:flex-row',
        className
      )}
    >
      <div className="w-full md:w-1/2 lg:w-1/4">
        <DrawingSwiper images={images} />
      </div>

      <div className="flex flex-col gap-2">
        <Typography variant="p">
          {t('title')}: {title}
        </Typography>
        <Typography variant="p">
          {t('description')}: {description}
        </Typography>
        <Typography variant="p">{drawingDimensionStr}</Typography>
        <Typography variant="p">
          {t('price')}: {formatPrice(price)}
        </Typography>
      </div>
    </div>
  )
}
