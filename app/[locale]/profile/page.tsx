import { useLocale } from 'next-intl'

import { redirect } from '~/shared/lib'

export default function ProfilePage() {
  const locale = useLocale()

  redirect({
    href: '/drawings/list',
    locale,
  })
}
