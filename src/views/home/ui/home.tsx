import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { ContactForm } from '~/features/contact-form'
import { Link } from '~/shared/lib'
import { LocaleParams } from '~/shared/model'
import { Button, OImage, Typography } from '~/shared/ui'
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
      <section>
        <div className="relative container h-[500px]">
          <OImage
            quality={100}
            loading="eager"
            src="/assets/img/zaria-forman.webp"
            alt="zaria-forman"
            fill
          />
        </div>
      </section>
      <section>
        <div className="container">
          <Typography variant="h4" className="mb-4 uppercase">
            {t('bio.title')}
          </Typography>
          <div>
            {t.rich('bio.description', {
              br: () => <br />,
              p: (chunks) => <Typography variant="p">{chunks}</Typography>,
              ul: (chunks) => <ul className="ml-4">{chunks}</ul>,
              li: (chunks) => <li>{chunks}</li>,
              icon: (chunks) => <>✨ {chunks}</>,
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <Typography variant="h4" className="mb-4 uppercase">
            {t('drawings.title')}
          </Typography>
          <DrawingSlidesGallery />
          <Button variant="secondary" asChild className="mt-4">
            <Link href="/drawings/list">{t('drawings.viewAllBtn')}</Link>
          </Button>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="mb-4">
            <Typography variant="h4" className="mb-4 uppercase">
              {t('contacts.title')}
            </Typography>
            <Typography variant="p">{t('contacts.description')}</Typography>
          </div>
          <ContactForm className="w-full md:w-[60%]" />
        </div>
      </section>
    </AppLayout>
  )
}
