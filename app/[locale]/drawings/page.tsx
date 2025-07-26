import { useLocale } from 'next-intl'

import { redirect } from '~/shared/lib'

export default function DrawingsPage() {
  const locale = useLocale()

  redirect({
    href: '/drawings/list',
    locale,
  })
}
