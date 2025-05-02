import { Locale, useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { ThemeSwitcher, Button, LocaleSwitcher } from '~/shared/ui'

type Props = {
  params: Promise<{ locale: Locale }>
}

export function Home({ params }: Props) {
  const { locale } = use(params)

  setRequestLocale(locale)

  const t = useTranslations('HomePage')

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <p>{t('about')}</p>
      <div className="flex items-center gap-2 mt-4">
        <Button>Button</Button>
        <ThemeSwitcher />
        <LocaleSwitcher />
      </div>
    </div>
  )
}
