import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { LocaleParams } from '~/shared/model'
import { BreadcrumbItem, Breadcrumbs } from '~/shared/ui'
import { DrawingsGallery } from '~/widgets/drawings-gallery'
import { AppLayout } from '~/widgets/layouts'

import { AddDrawingBtn } from './add-drawing-btn'

type Props = {
  params: LocaleParams
}

export function DrawingList({ params }: Props) {
  const { locale } = use(params)

  setRequestLocale(locale)

  const t = useTranslations('ListDrawingsPage')

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: t('breadcrumbs.home'), href: '/home' },
    { label: t('breadcrumbs.drawings'), href: '/drawings/list' },
  ]

  return (
    <AppLayout>
      <div className="section">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <Breadcrumbs items={breadcrumbItems} />
            <AddDrawingBtn />
          </div>
          <DrawingsGallery />
        </div>
      </div>
    </AppLayout>
  )
}
