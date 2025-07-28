import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { AddDrawingForm } from '~/features/add-drawing-form'
import { LocaleParams } from '~/shared/model'
import { BreadcrumbItem, Breadcrumbs } from '~/shared/ui'
import { AppLayout } from '~/widgets/layouts'

type Props = {
  params: LocaleParams
}

export function DrawingAdd({ params }: Props) {
  const { locale } = use(params)

  setRequestLocale(locale)

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/home' },
    { label: 'Drawings', href: '/drawings/list' },
    { label: 'Add Drawing' },
  ]

  return (
    <AppLayout>
      <div className="section">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} className="mb-8" />
          <AddDrawingForm />
        </div>
      </div>
    </AppLayout>
  )
}
