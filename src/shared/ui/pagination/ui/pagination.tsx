'use client'

import { PaginationProps } from '../model'

import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from './pagination-items'

export const Pagination = ({
  page,
  total,
  limit,
  onPageChangeAction,
  className,
}: PaginationProps) => {
  const totalPages = Math.ceil(total / limit)

  return (
    <PaginationComponent className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChangeAction(Math.max(page - 1, 1))}
            aria-disabled={page === 1}
            disabled={page === 1}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }, (_, i) => (
          <PaginationItem key={i}>
            <button
              className={`px-3 py-1 rounded ${
                page === i + 1 ? 'bg-primary text-white' : 'bg-muted'
              }`}
              onClick={() => onPageChangeAction(i + 1)}
            >
              {i + 1}
            </button>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChangeAction(Math.min(page + 1, totalPages))}
            aria-disabled={page === totalPages}
            disabled={page === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationComponent>
  )
}
