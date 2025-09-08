import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { SignInForm } from '~/features/sign-in-form'
import { LocaleParams } from '~/shared/model'

type Props = {
  params: LocaleParams
}

export function SignIn({ params }: Props) {
  const { locale } = use(params)

  setRequestLocale(locale)

  return (
    <div className="flex flex-1 h-screen items-center justify-center">
      <SignInForm />
    </div>
  )
}
