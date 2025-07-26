import type { Drawing } from '~/entities/drawing'
import { Link } from '~/shared/lib'
import { Swiper, Typography } from '~/shared/ui'
import { formatPrice, cn } from '~/shared/utils'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  drawing: Drawing
}

export function Drawing({ drawing, className }: Props) {
  const { $id, title, description, price, images } = drawing

  return (
    <Link
      href={{ pathname: '/drawings/[id]', params: { id: $id } }}
      className={cn(
        'flex flex-col gap-2 w-full aspect-square rounded overflow-hidden',
        className
      )}
    >
      <Swiper images={images} />

      <Typography variant="p">{title}</Typography>
      <Typography variant="p">{description}</Typography>
      <Typography variant="p">{formatPrice(price)}</Typography>
    </Link>
  )
}
