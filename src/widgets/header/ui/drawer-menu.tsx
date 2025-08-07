import {
  BreadcrumbItem,
  DrawerTitleHidden,
  ThemeSwitcher,
  LocaleSwitcher,
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from '~/shared/ui'

import { NavigationLink } from './navigation-link'

type Props = {
  navigationLinks: BreadcrumbItem[]
  children: React.ReactNode
}

export function DrawerMenu({ navigationLinks, children }: Props) {
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent aria-describedby={undefined}>
        <DrawerTitleHidden />
        <div className="flex flex-col gap-4 py-4">
          {navigationLinks.map((link) => (
            <NavigationLink
              key={link.label}
              href={link.href!}
              className="text-center uppercase"
            >
              {link.label}
            </NavigationLink>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
