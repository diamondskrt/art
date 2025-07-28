'use client'

import {
  useGetDrawings,
  DrawingComponent,
  DrawingSkeleton,
} from '~/entities/drawing'
import { Link } from '~/shared/lib'
import { cn } from '~/shared/utils'

type Props = React.HTMLAttributes<HTMLDivElement>

export function DrawingsGallery({ className }: Props) {
  const { data: drawings, isLoading } = useGetDrawings()

  if (isLoading) {
    return (
      <div
        className={cn(
          'grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4',
          className
        )}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <DrawingSkeleton key={index} />
        ))}
      </div>
    )
  }

  return drawings && drawings.length > 0 ? (
    <div
      className={cn(
        'grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4',
        className
      )}
    >
      {drawings.map((drawing) => (
        <Link
          key={drawing.$id}
          href={{ pathname: '/drawings/[id]', params: { id: drawing.$id } }}
        >
          <DrawingComponent drawing={drawing} />
        </Link>
      ))}
    </div>
  ) : (
    <div>No drawings found</div>
  )
}
