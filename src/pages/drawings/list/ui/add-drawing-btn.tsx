'use client'

import { PlusIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Link, useAuth } from '~/shared/lib'
import { Button } from '~/shared/ui'

export function AddDrawingBtn() {
  const { user } = useAuth()

  const t = useTranslations('ListDrawingsPage.actions')

  if (!user?.roles.includes('admin')) {
    return null
  }

  return (
    <Button asChild className="cursor-pointer">
      <Link href="/drawings/add">
        <PlusIcon />
        {t('add')}
      </Link>
    </Button>
  )
}
