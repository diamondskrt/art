'use client'

import { useSelectedLayoutSegment } from 'next/navigation'
import { ComponentProps } from 'react'

import { Link, cn } from '~/shared/lib'
import { Typography } from '~/shared/ui'

function NavigationLink({
  href,
  children,
  ...props
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/'
  const isActive = pathname === href

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'transition-colors',
        isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
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
