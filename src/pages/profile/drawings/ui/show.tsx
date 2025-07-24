import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { LocaleParams } from '~/shared/model'

type Props = {
  params: LocaleParams
}

export function Show({ params }: Props) {
  const { locale } = use(params)

  setRequestLocale(locale)

  return <div>Show</div>
}
