import { Footer } from '~/widgets/footer'
import { Header } from '~/widgets/header'

type Props = {
  children: React.ReactNode
}

function AppLayout({ children }: Props) {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export { AppLayout }
