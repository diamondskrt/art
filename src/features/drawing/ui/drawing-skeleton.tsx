import { Skeleton } from '~/shared/ui'
import { cn } from '~/shared/utils'

type Props = React.HTMLAttributes<HTMLDivElement>

export function DrawingSkeleton({ className }: Props) {
  return (
    <div
      className={cn('flex flex-col gap-2 rounded overflow-hidden', className)}
    >
      <Skeleton className="w-full aspect-square" />
      <Skeleton className="w-full h-4 mt-2" />
      <Skeleton className="w-full h-4 mt-2" />
      <Skeleton className="w-full h-4 mt-2" />
    </div>
  )
}
