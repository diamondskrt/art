import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { LocaleParams } from '~/shared/model'
import { AppLayout } from '~/widgets/layouts'

import { DrawingShowContainer } from './drawing-show-container'

type Props = {
  params: LocaleParams
}

export function DrawingShow({ params }: Props) {
  const { locale } = use(params)

  setRequestLocale(locale)

  return (
    <AppLayout>
      <div className="section">
        <DrawingShowContainer />
      </div>
    </AppLayout>
  )
}
