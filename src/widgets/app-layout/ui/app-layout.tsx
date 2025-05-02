import { Footer } from '~/widgets/footer'
import { Header } from '~/widgets/header'

type Props = {
  children: React.ReactNode
}

function AppLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export { AppLayout }
