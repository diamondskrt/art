import { useLocale, useTranslations, Locale } from 'next-intl'
import { useTransition } from 'react'

import { usePathname, useRouter, routing } from '~/shared/lib'
import { Select } from '~/shared/ui'

function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()

  const onSelectChange = (value: string) => {
    const nextLocale = value as Locale

    startTransition(() => {
      router.replace({ pathname }, { locale: nextLocale })
    })
  }

  return (
    <Select
      defaultValue={locale as string}
      label={t('label')}
      options={routing.locales.map((cur) => ({
        label: t('locale', { locale: cur }),
        value: cur,
      }))}
      disabled={isPending}
      triggerClassName="min-w-[80px]"
      onSelectChange={onSelectChange}
    />
  )
}

export { LocaleSwitcher }
