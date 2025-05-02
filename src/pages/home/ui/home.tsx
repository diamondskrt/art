import Image from 'next/image'
import { Locale, useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { Typography } from '~/shared/ui'
import { AppLayout } from '~/widgets/app-layout'

type Props = {
  params: Promise<{ locale: Locale }>
}

export function Home({ params }: Props) {
  const { locale } = use(params)

  setRequestLocale(locale)

  const t = useTranslations('IndexPage')

  return (
    <AppLayout>
      <div className="section">
        <div className="container relative h-[500px]">
          <Image
            src="/assets/img/zaria-forman.webp"
            fill
            priority
            alt="Picture of the author"
            className="object-cover"
          />
        </div>
      </div>
      <div className="section">
        <div className="container">
          <Typography variant="h4" className="mb-4 uppercase">
            BIO and CV
          </Typography>
          <Typography variant="small">
            {t.rich('description', {
              strong: (chunks) => (
                <Typography variant="strong">{chunks}</Typography>
              ),
            })}
          </Typography>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <Typography variant="h4" className="mb-4 uppercase">
            Drawings
          </Typography>
        </div>
      </div>
    </AppLayout>
  )
}
