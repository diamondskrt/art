import type { Drawing } from '~/entities/drawing'
import { Typography } from '~/shared/ui'
import { formatPrice, cn } from '~/shared/utils'

import { DrawingSwiper } from './drawing-swiper'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  drawing: Drawing
}

export function DrawingWithSwiper({ drawing, className }: Props) {
  const { title, description, price, images } = drawing

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
        <Typography variant="h3">Title: {title}</Typography>
        <Typography variant="p">Description: {description}</Typography>
        <Typography variant="h4">Price: {formatPrice(price)}</Typography>
      </div>
    </div>
  )
}
