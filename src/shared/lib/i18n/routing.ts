import { defineRouting } from 'next-intl/routing'

const routing = defineRouting({
  locales: ['en', 'ru'],
  defaultLocale: 'ru',
  pathnames: {
    '/': '/',
    '/auth': '/auth',
    '/auth/sign-in': '/auth/sign-in',
    '/home': '/home',
  },
})

export { routing }
