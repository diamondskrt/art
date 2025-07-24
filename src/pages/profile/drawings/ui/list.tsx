import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { LocaleParams } from '~/shared/model'
import { Typography } from '~/shared/ui'
import { DrawingsGallery } from '~/widgets/drawings-gallery'
import { ProfileLayout } from '~/widgets/layouts'

type Props = {
  params: LocaleParams
}

export function List({ params }: Props) {
  const { locale } = use(params)

  setRequestLocale(locale)

  return (
    <ProfileLayout>
      <div className="section">
        <div className="container">
          <Typography variant="h4" className="mb-4 uppercase">
            Drawings List
          </Typography>
          <DrawingsGallery />
        </div>
      </div>
    </ProfileLayout>
  )
}
