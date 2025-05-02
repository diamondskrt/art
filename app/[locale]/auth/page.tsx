import { useLocale } from 'next-intl'

import { redirect } from '~/shared/lib'

export default function AuthPage() {
  const locale = useLocale()

  redirect({
    href: '/auth/sign-in',
    locale,
  })
}
