import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { AddDrawingForm } from '~/features/add-drawing-form'
import { LocaleParams } from '~/shared/model'
import { BackButton, BreadcrumbItem, Breadcrumbs } from '~/shared/ui'
import { AppLayout } from '~/widgets/layouts'

type Props = {
  params: LocaleParams
}

export function DrawingAdd({ params }: Props) {
  const { locale } = use(params)

  setRequestLocale(locale)

  const t = useTranslations('AddDrawingPage')

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: t('breadcrumbs.home'), href: '/home' },
    { label: t('breadcrumbs.drawings'), href: '/drawings/list' },
    { label: t('breadcrumbs.addDrawing') },
  ]

  return (
    <AppLayout>
      <div className="section">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <Breadcrumbs items={breadcrumbItems} />
            <BackButton />
          </div>
          <AddDrawingForm />
        </div>
      </div>
    </AppLayout>
  )
}
