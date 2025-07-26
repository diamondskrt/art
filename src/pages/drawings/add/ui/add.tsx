import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { AddDrawingForm } from '~/features/add-drawing-form'
import { LocaleParams } from '~/shared/model'
import { Typography } from '~/shared/ui'
import { AppLayout } from '~/widgets/layouts'

type Props = {
  params: LocaleParams
}

export function DrawingAdd({ params }: Props) {
  const { locale } = use(params)

  setRequestLocale(locale)

  return (
    <AppLayout>
      <div className="section">
        <div className="container">
          <Typography variant="h4" className="uppercase mb-4">
            Add Drawing
          </Typography>
          <AddDrawingForm />
        </div>
      </div>
    </AppLayout>
  )
}
