import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { LocaleParams } from '~/shared/model'
import { Typography } from '~/shared/ui'
import { DrawingsGallery } from '~/widgets/drawings-gallery'
import { AppLayout } from '~/widgets/layouts'

type Props = {
  params: LocaleParams
}

export function Drawings({ params }: Props) {
  const { locale } = use(params)

  setRequestLocale(locale)

  return (
    <AppLayout>
      <div className="section">
        <div className="container">
          <Typography variant="h4" className="mb-4 uppercase">
            Drawings
          </Typography>
          <DrawingsGallery />
        </div>
      </div>
    </AppLayout>
  )
}
