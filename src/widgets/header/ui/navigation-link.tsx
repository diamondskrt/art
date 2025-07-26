'use client'

import { ComponentProps } from 'react'

import { Link, usePathname } from '~/shared/lib'
import { Typography } from '~/shared/ui'
import { cn } from '~/shared/utils'

function NavigationLink({
  href,
  children,
  ...props
}: ComponentProps<typeof Link>) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'transition-colors',
        isActive
          ? 'text-primary transition-opacity hover:opacity-70'
          : 'text-muted-foreground transition-opacity hover:opacity-70'
      )}
      href={href}
      {...props}
    >
      <Typography variant="small" className="uppercase">
        {children}
      </Typography>
    </Link>
  )
}

export { NavigationLink }
