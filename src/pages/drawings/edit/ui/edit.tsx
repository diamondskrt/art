import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { LocaleParams } from '~/shared/model'
import { AppLayout } from '~/widgets/layouts'

import { DrawingEditContainer } from './drawing-edit-container'

type Props = {
  params: LocaleParams
}

export function DrawingEdit({ params }: Props) {
  const { locale } = use(params)

  setRequestLocale(locale)

  return (
    <AppLayout>
      <div className="section">
        <DrawingEditContainer />
      </div>
    </AppLayout>
  )
}
