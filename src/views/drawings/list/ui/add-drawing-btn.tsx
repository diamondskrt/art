'use client'

import { PlusIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Link, useAuth } from '~/shared/lib'
import { Button, Skeleton } from '~/shared/ui'

export function AddDrawingBtn() {
  const { user, isLoading } = useAuth()

  const t = useTranslations('ListDrawingsPage.actions')

  if (!user?.roles.includes('admin')) {
    return null
  }

  return isLoading ? (
    <Skeleton className="w-full md:w-[180px] h-9" />
  ) : (
    <Button asChild className="cursor-pointer">
      <Link href="/drawings/add">
        <PlusIcon />
        {t('add')}
      </Link>
    </Button>
  )
}
