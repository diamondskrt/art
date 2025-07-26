'use client'

import { SlashIcon } from 'lucide-react'
import { Fragment } from 'react'

import { Link } from '~/shared/lib'
import { cn } from '~/shared/utils'

import { BreadcrumbsProps } from '../model'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './breadcrumb-items'

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const isLastIndex = (index: number) => index === items.length - 1

  return (
    <Breadcrumb className={cn(className)}>
      <BreadcrumbList>
        {items.map((item, index) => (
          <Fragment key={index}>
            <BreadcrumbItem key={item.label}>
              {item.href ? (
                <BreadcrumbLink asChild>
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  <Link href={item.href as any}>{item.label}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {!isLastIndex(index) && (
              <BreadcrumbSeparator className="[&>svg]:size-3">
                <SlashIcon className="-rotate-[15deg] mt-1" />
              </BreadcrumbSeparator>
            )}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
