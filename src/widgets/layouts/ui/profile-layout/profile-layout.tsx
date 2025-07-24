import { Footer } from '~/widgets/footer'
import { Header } from '~/widgets/header'

import { ProfileSidebar } from './menubar'

type Props = {
  children: React.ReactNode
}

function ProfileLayout({ children }: Props) {
  return (
    <>
      <ProfileSidebar />
      <div className="flex flex-col flex-1 px-4">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}

export { ProfileLayout }
