'use client'

import { Skeleton } from '~/shared/ui'

type Props = React.HTMLAttributes<HTMLDivElement>

export function UpdateDrawingFormSkeleton(props: Props) {
  return (
    <div className="space-y-4" {...props}>
      <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className="w-full aspect-square" />
        ))}
      </div>
      <Skeleton className="w-full md:w-[300px] h-9" />
      <Skeleton className="w-full md:w-[300px] h-9" />
      <Skeleton className="w-full md:w-[300px] h-9" />
      <Skeleton className="w-full md:w-[140px] h-9" />
    </div>
  )
}
