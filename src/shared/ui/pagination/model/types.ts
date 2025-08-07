type PaginationProps = React.ComponentProps<'nav'> & {
  page: number
  total: number
  limit: number
  onPageChangeAction: (newPage: number) => void
}

type UsePaginationOptions = {
  defaultLimit?: number
}

export type { PaginationProps, UsePaginationOptions }
