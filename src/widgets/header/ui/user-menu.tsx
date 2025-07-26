'use client'

import { LogOutIcon, UserIcon } from 'lucide-react'
import { useMemo } from 'react'
import { toast } from 'sonner'

import { Link, useAuth, useRouter } from '~/shared/lib'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/shared/ui'

export function UserMenu() {
  const { user, logout } = useAuth()
  const userShortName = useMemo(() => {
    return user?.name.charAt(0).toUpperCase()
  }, [user])

  const router = useRouter()

  const onLogout = async () => {
    try {
      await logout()
      router.push('/auth/sign-in')
      toast.success('Logout successful')
    } catch (error) {
      toast.error((error as Error).message)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{userShortName}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/drawings/list">
              <UserIcon />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onLogout}>
            <LogOutIcon />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
