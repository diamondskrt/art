import { defineRouting } from 'next-intl/routing'

const routing = defineRouting({
  locales: ['en', 'ru'],
  defaultLocale: 'ru',
  pathnames: {
    '/auth/sign-in': '/auth/sign-in',
    '/home': '/home',
    '/drawings': '/drawings',
    '/profile/drawings': '/profile/drawings',
  },
})

export { routing }
