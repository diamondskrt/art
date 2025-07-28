'use client'

import { useParams } from 'next/navigation'
import { useLocale, useTranslations, Locale } from 'next-intl'
import { useTransition } from 'react'

import { usePathname, useRouter, routing } from '~/shared/lib'
import { Select } from '~/shared/ui'
import { cn } from '~/shared/utils'

function LocaleSwitcher({ className }: { className?: string }) {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  const onSelectChange = (value: string) => {
    const nextLocale = value as Locale

    startTransition(() => {
      router.replace(
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          pathname: pathname as any,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          params: params as any,
        },
        { locale: nextLocale }
      )
    })
  }

  return (
    <Select
      defaultValue={locale as string}
      label={t('label')}
      options={routing.locales.map((locale) => ({
        label: t('locale', { locale }),
        value: locale,
      }))}
      disabled={isPending}
      triggerClassName={cn(className)}
      onSelectChange={onSelectChange}
    />
  )
}

export { LocaleSwitcher }
