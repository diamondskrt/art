import { MetadataRoute } from 'next'
import { getTranslations } from 'next-intl/server'

import { routing } from '~/shared/lib'

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const t = await getTranslations({
    locale: routing.defaultLocale,
    namespace: 'Manifest',
  })

  return {
    name: t('name'),
    start_url: '/',
    theme_color: '#101E33',
  }
}
