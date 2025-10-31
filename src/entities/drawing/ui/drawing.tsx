import type { Drawing } from '~/entities/drawing'
import { OImage, Typography } from '~/shared/ui'
import { cn, formatPrice } from '~/shared/utils'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  drawing: Drawing
}

export function DrawingComponent({ drawing, className }: Props) {
  const { title, description, price, images } = drawing

  return (
    <div
      className={cn(
        'relative flex flex-col gap-2 rounded overflow-hidden',
        className
      )}
    >
      <div className="relative aspect-square">
        <OImage src={images[0].url} alt={images[0].name} />
      </div>

      <Typography variant="p">{title}</Typography>
      <Typography variant="p">{description}</Typography>
      <Typography variant="p">{formatPrice(price)}</Typography>
    </div>
  )
}
