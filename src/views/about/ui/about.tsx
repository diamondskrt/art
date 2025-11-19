import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import { LocaleParams } from '~/shared/model'
import { BreadcrumbItem, Breadcrumbs, Typography } from '~/shared/ui'
import { AppLayout } from '~/widgets/layouts'

type Props = {
  params: LocaleParams
}

export function About({ params }: Props) {
  const { locale } = use(params)

  setRequestLocale(locale)

  const t = useTranslations('AboutPage')

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: t('breadcrumbs.home'), href: '/home' },
    { label: t('breadcrumbs.about') },
  ]

  return (
    <AppLayout>
      <section>
        <div className="container">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          <div>
            {t.rich('html', {
              br: () => <br />,
              hr: () => <hr />,
              h4: (chunks) => (
                <Typography variant="h4" className="mb-4">
                  {chunks}
                </Typography>
              ),
              p: (chunks) => <Typography variant="p">{chunks}</Typography>,
              em: (chunks) => <Typography variant="em">{chunks}</Typography>,
              ul: (chunks) => <ul>{chunks}</ul>,
              li: (chunks) => <li>{chunks}</li>,
              icon: (chunks) => <>✨ {chunks}</>,
            })}
          </div>
        </div>
      </section>
    </AppLayout>
  )
}
