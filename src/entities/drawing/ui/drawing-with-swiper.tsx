import { useTranslations } from 'next-intl'

import type { Drawing } from '~/entities/drawing'
import { Typography } from '~/shared/ui'
import { formatPrice, cn } from '~/shared/utils'

import { DrawingSwiper } from './drawing-swiper'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  drawing: Drawing
}

export function DrawingWithSwiper({ drawing, className }: Props) {
  const { title, description, price, images } = drawing

  const t = useTranslations('ShowDrawingPage.drawing')

  return (
    <div
      className={cn(
        'relative flex flex-col md:flex-row gap-4 w-full',
        className
      )}
    >
      <div className="w-full md:w-1/2 lg:w-1/4">
        <DrawingSwiper images={images} />
      </div>

      <div className="flex flex-col gap-2">
        <Typography variant="h3">
          {t('title')}: {title}
        </Typography>
        <Typography variant="p">
          {t('description')}: {description}
        </Typography>
        <Typography variant="h4">
          {t('price')}: {formatPrice(price)}
        </Typography>
      </div>
    </div>
  )
}
