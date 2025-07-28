import Image from 'next/image'

import type { Drawing } from '~/entities/drawing'
import { Typography } from '~/shared/ui'
import { formatPrice, cn } from '~/shared/utils'

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
        <Image
          src={images[0].url}
          alt={images[0].name}
          fill
          placeholder="blur"
          blurDataURL="/assets/img/placeholder.webp"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <Typography variant="p">{title}</Typography>
      <Typography variant="p">{description}</Typography>
      <Typography variant="p">{formatPrice(price)}</Typography>
    </div>
  )
}
