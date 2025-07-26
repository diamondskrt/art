import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { LocaleParams } from '~/shared/model'
import { Typography } from '~/shared/ui'
import { AppLayout } from '~/widgets/layouts'

type Props = {
  params: LocaleParams
}

export function DrawingEdit({ params }: Props) {
  const { locale } = use(params)

  setRequestLocale(locale)

  return (
    <AppLayout>
      <div className="section">
        <div className="container">
          <div className="flex flex-col gap-4 mb-4">
            <Typography variant="h4" className="uppercase">
              Drawing Edit
            </Typography>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
