'use client'

import { useGetDrawings } from '~/entities/drawing'
import { Drawing, DrawingSkeleton } from '~/features/drawing'
import { cn } from '~/shared/utils'

type Props = React.HTMLAttributes<HTMLDivElement>

export function DrawingsGallery({ className }: Props) {
  const { data: drawings, isLoading } = useGetDrawings()

  return (
    <div
      className={cn(
        'grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4',
        className
      )}
    >
      {isLoading ? (
        Array.from({ length: 4 }).map((_, index) => (
          <DrawingSkeleton key={index} />
        ))
      ) : drawings && drawings.length > 0 ? (
        drawings.map((drawing) => (
          <Drawing key={drawing.$id} drawing={drawing} />
        ))
      ) : (
        <div>No drawings found</div>
      )}
    </div>
  )
}
