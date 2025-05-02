import { useLocale } from 'next-intl'

import { redirect } from '~/shared/lib'

export default function RootPage() {
  const locale = useLocale()

  redirect({
    href: '/home',
    locale,
  })
}
