import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { LocaleParams } from '~/shared/model'

type Props = {
  params: LocaleParams
}

export function NotFound({ params }: Props) {
  const { locale } = use(params)

  setRequestLocale(locale)

  notFound()
}
