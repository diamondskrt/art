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

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/home' },
    { label: 'Drawings', href: '/drawings/list' },
  ]

  return (
    <AppLayout>
      <div className="section">
        <div className="container">
          <div className="flex justify-between gap-4 mb-8">
            <Breadcrumbs items={breadcrumbItems} />
            <AddDrawingBtn />
          </div>
          <DrawingsGallery />
        </div>
      </div>
    </AppLayout>
  )
}
