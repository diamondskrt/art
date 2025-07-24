import Image from 'next/image'
import { Locale, useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { Link } from '~/shared/lib'
import { LocaleParams } from '~/shared/model'
import { Button, Typography } from '~/shared/ui'
import { DrawingsGallery } from '~/widgets/drawings-gallery'
import { AppLayout } from '~/widgets/layouts'

import { ContactForm } from './contact-form'

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
          <DrawingsGallery />
          <Button variant="secondary" asChild>
            <Link href="/drawings">View all</Link>
          </Button>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="mb-4">
            <Typography variant="h4" className="mb-4 uppercase">
              Contacts
            </Typography>
            <Typography variant="p">
              For general enquiries, images of available works, and a price
              list, email my studio manager at xan@zariaforman.com.
            </Typography>
            <Typography variant="p">
              Limited edition prints of my work are available exclusively at
              ArtStar.com.
            </Typography>
          </div>
          <ContactForm className="w-[60%]" />
        </div>
      </div>
    </AppLayout>
  )
}
