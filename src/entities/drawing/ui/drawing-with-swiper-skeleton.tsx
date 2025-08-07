import { Skeleton } from '~/shared/ui'
import { cn } from '~/shared/utils'

type Props = React.HTMLAttributes<HTMLDivElement>

export function DrawingWithSwiperSkeleton({ className }: Props) {
  return (
    <div
      className={cn(
        'relative flex flex-col md:flex-row gap-4 w-full',
        className
      )}
    >
      <div className="w-full md:w-1/2 lg:w-1/4">
        <div className="relative grid gap-2 h-full w-full">
          <Skeleton className="w-full aspect-square" />
          <div className="flex gap-2">
            <Skeleton className="w-[100px] h-[100px]" />
            <Skeleton className="w-[100px] h-[100px]" />
            <Skeleton className="w-[100px] h-[100px]" />
          </div>
        </div>
      </div>

      <div className="w-[300px] flex flex-col gap-2 pt-2">
        <Skeleton className="w-full h-6" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-6" />
      </div>
    </div>
  )
}
