import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { ContactForm } from '~/features/contact-form'
import { Link } from '~/shared/lib'
import { LocaleParams } from '~/shared/model'
import { Button, Typography } from '~/shared/ui'
import { DrawingSlidesGallery } from '~/widgets/drawing-slides-gallery'
import { AppLayout } from '~/widgets/layouts'

type Props = {
  params: LocaleParams
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
          <Typography variant="p">
            {t.rich('bio', {
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
            {t('drawings.title')}
          </Typography>
          <DrawingSlidesGallery />
          <Button variant="secondary" asChild className="mt-4">
            <Link href="/drawings/list">{t('drawings.viewAllBtn')}</Link>
          </Button>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="mb-4">
            <Typography variant="h4" className="mb-4 uppercase">
              {t('contacts.title')}
            </Typography>
            <Typography variant="p">{t('contacts.text1')}</Typography>
            <Typography variant="p">{t('contacts.text2')}</Typography>
          </div>
          <ContactForm className="w-[60%]" />
        </div>
      </div>
    </AppLayout>
  )
}
