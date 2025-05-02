import { defineRouting } from 'next-intl/routing'

const routing = defineRouting({
  locales: ['en', 'ru'],
  defaultLocale: 'ru',
  pathnames: {
    '/': '/',
  },
})

export { routing }
