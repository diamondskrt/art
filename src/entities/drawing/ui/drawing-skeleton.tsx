import { Skeleton } from '~/shared/ui'
import { cn } from '~/shared/utils'

type Props = React.HTMLAttributes<HTMLDivElement>

export function DrawingSkeleton({ className }: Props) {
  return (
    <div
      className={cn('flex flex-col gap-2 overflow-hidden rounded', className)}
    >
      <Skeleton className="aspect-square w-full" />
      <Skeleton className="mt-2 h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-full" />
    </div>
  )
}
