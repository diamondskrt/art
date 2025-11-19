import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { Suspense, use } from 'react'

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
    { label: t('breadcrumbs.drawings') },
  ]

  return (
    <AppLayout>
      <section>
        <div className="container">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <Breadcrumbs items={breadcrumbItems} />
            <AddDrawingBtn />
          </div>
          <Suspense>
            <DrawingsGallery />
          </Suspense>
        </div>
      </section>
    </AppLayout>
  )
}
