import { MetadataRoute } from 'next'
import { Locale } from 'next-intl'

import { getPathname, routing } from '~/shared/lib'

import { host } from '../config'

export default function sitemap(): MetadataRoute.Sitemap {
  return [...getEntries('/')]
}

type Href = Parameters<typeof getPathname>[0]['href']

function getEntries(href: Href) {
  return routing.locales.map((locale) => ({
    url: getUrl(href, locale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((cur) => [cur, getUrl(href, cur)])
      ),
    },
  }))
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href })
  return host + pathname
}
