import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { LocaleParams } from '~/shared/model'
import { ProfileLayout } from '~/widgets/layouts'

import { UserInfo } from './userInfo'

type Props = {
  params: LocaleParams
}

export function Profile({ params }: Props) {
  const { locale } = use(params)

  setRequestLocale(locale)

  return (
    <ProfileLayout>
      <UserInfo />
    </ProfileLayout>
  )
}
