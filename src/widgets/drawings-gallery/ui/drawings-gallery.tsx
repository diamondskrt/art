'use client'

import { useEffect, useMemo } from 'react'

import {
  useGetDrawings,
  DrawingComponent,
  DrawingSkeleton,
} from '~/entities/drawing'
import { Link } from '~/shared/lib'
import {
  DEFAULT_PAGE,
  Pagination,
  SearchInput,
  Skeleton,
  usePagination,
  useSearch,
} from '~/shared/ui'
import { cn } from '~/shared/utils'

type Props = React.HTMLAttributes<HTMLDivElement>

export function DrawingsGallery({ className }: Props) {
  const { page, setPage, limit } = usePagination()
  const { search } = useSearch()
  const params = useMemo(() => ({ page, limit, search }), [page, limit, search])

  const { data, isLoading } = useGetDrawings(params)

  const drawings = data?.drawings || []
  const total = data?.total || 0

  useEffect(() => {
    if (!search) return
    setPage(DEFAULT_PAGE)
  }, [search, setPage])

  if (isLoading) {
    return (
      <>
        <Skeleton className="mb-8 w-[350px] h-9" />
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
      </>
    )
  }

  return (
    <>
      <SearchInput className="mb-8 w-[350px]" />
      {drawings.length > 0 ? (
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
      )}
      {total > limit && (
        <Pagination
          page={page}
          total={total}
          limit={limit}
          className="mt-8"
          onPageChangeAction={setPage}
        />
      )}
    </>
  )
}
