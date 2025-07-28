import { Geist, Geist_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'
import { hasLocale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { ReactNode } from 'react'

import { Providers } from '~/app/providers'
import '~/app/styles/globals.css'
import { routing } from '~/shared/lib'
import { Sonner } from '~/shared/ui'

type Props = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata(props: Omit<Props, 'children'>) {
  const { locale } = await props.params

  const t = await getTranslations({ locale, namespace: 'LocaleLayout' })

  return {
    title: t('title'),
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<Props>) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
          <Sonner richColors />
        </Providers>
      </body>
    </html>
  )
}
