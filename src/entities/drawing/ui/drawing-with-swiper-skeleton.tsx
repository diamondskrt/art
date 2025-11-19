import { Skeleton } from '~/shared/ui'
import { cn } from '~/shared/utils'

type Props = React.HTMLAttributes<HTMLDivElement>

export function DrawingWithSwiperSkeleton({ className }: Props) {
  return (
    <div
      className={cn(
        'relative flex w-full flex-col gap-4 md:flex-row',
        className
      )}
    >
      <div className="w-full md:w-1/2 lg:w-1/4">
        <div className="relative grid h-full w-full gap-2">
          <Skeleton className="aspect-square w-full" />
          <div className="flex gap-2">
            <Skeleton className="h-[100px] w-[100px]" />
            <Skeleton className="h-[100px] w-[100px]" />
            <Skeleton className="h-[100px] w-[100px]" />
          </div>
        </div>
      </div>

      <div className="flex w-[300px] flex-col gap-2 pt-2">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-6 w-full" />
      </div>
    </div>
  )
}
