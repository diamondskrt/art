'use client'

import { useGetCurrentUser, useLogin, useLogout } from '~/entities/user'
import { AuthContext, AuthContextType } from '~/shared/lib'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: user, isLoading: isUserLoading } = useGetCurrentUser()
  const { mutateAsync: login, isPending: isLoginLoading } = useLogin()
  const { mutateAsync: logout, isPending: isLogoutLoading } = useLogout()

  const isLoading = isUserLoading || isLoginLoading || isLogoutLoading

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
