import { routing } from '~/shared/lib'

interface BreadcrumbsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: BreadcrumbItem[]
}
type BreadcrumbItem = {
  label: string
  href?: keyof (typeof routing)['pathnames']
}

export type { BreadcrumbsProps, BreadcrumbItem }
