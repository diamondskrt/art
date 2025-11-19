import type { Drawing } from '~/entities/drawing'
import { OImage, Typography } from '~/shared/ui'
import { cn, formatPrice } from '~/shared/utils'

import { useDrawingDimension } from '../lib'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  drawing: Drawing
}

export function DrawingComponent({ drawing, className }: Props) {
  const { title, description, price, images, length, width, depth } = drawing
  const { drawingDimensionStr } = useDrawingDimension({ length, width, depth })

  return (
    <div
      className={cn(
        'relative flex flex-col gap-2 overflow-hidden rounded',
        className
      )}
    >
      <div className="relative aspect-square">
        <OImage src={images[0].url} alt={images[0].name} fill />
      </div>

      <Typography variant="p">{title}</Typography>
      <Typography variant="p">{description}</Typography>
      <Typography variant="p">{drawingDimensionStr}</Typography>
      <Typography variant="p">{formatPrice(price)}</Typography>
    </div>
  )
}
