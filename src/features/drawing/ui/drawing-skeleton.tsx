import { Skeleton } from '~/shared/ui'
import { cn } from '~/shared/utils'

type Props = React.HTMLAttributes<HTMLDivElement>

export function DrawingSkeleton({ className }: Props) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 w-full aspect-square rounded overflow-hidden',
        className
      )}
    >
      <Skeleton className="w-full h-full" />
      <Skeleton className="w-full h-4 mt-2" />
      <Skeleton className="w-full h-4 mt-2" />
      <Skeleton className="w-full h-4 mt-2" />
    </div>
  )
}
