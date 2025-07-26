import { Home, Inbox, Settings } from 'lucide-react'

import { Link, routing } from '~/shared/lib'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '~/shared/ui'

type MenuItem = {
  title: string
  url: keyof (typeof routing)['pathnames']
  icon: React.ElementType
}

const items: MenuItem[] = [
  {
    title: 'На главную',
    url: '/home',
    icon: Home,
  },
  {
    title: 'Мои работы',
    url: '/drawings/list',
    icon: Inbox,
  },
]

export function ProfileSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Меню</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  <Link href={item.url as any}>
                    <SidebarMenuButton className="cursor-pointer">
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
