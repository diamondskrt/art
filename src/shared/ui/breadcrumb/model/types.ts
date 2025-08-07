import { ComponentProps } from 'react'

import { Link } from '~/shared/lib'

interface BreadcrumbsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: BreadcrumbItem[]
}
type BreadcrumbItem = {
  label: string
  href?: ComponentProps<typeof Link>['href']
}

export type { BreadcrumbsProps, BreadcrumbItem }
