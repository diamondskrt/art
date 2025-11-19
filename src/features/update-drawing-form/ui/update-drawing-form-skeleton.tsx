'use client'

import { Skeleton } from '~/shared/ui'

type Props = React.HTMLAttributes<HTMLDivElement>

export function UpdateDrawingFormSkeleton(props: Props) {
  return (
    <div className="space-y-4" {...props}>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className="aspect-square w-full" />
        ))}
      </div>
      <Skeleton className="h-9 w-full md:w-[300px]" />
      <Skeleton className="h-9 w-full md:w-[300px]" />
      <Skeleton className="h-9 w-full md:w-[300px]" />
      <Skeleton className="h-9 w-full md:w-[140px]" />
    </div>
  )
}
