import { defineRouting } from 'next-intl/routing'

const routing = defineRouting({
  locales: ['en', 'ru'],
  defaultLocale: 'ru',
  pathnames: {
    '/auth/sign-in': '/auth/sign-in',
    '/home': '/home',
    '/drawings/list': '/drawings/list',
    '/drawings/add': '/drawings/add',
    '/drawings/[id]': '/drawings/[id]',
    '/drawings/[id]/edit': '/drawings/[id]/edit',
    '/settings': '/settings',
    '/profile': '/profile',
  },
})

export { routing }
