import { Footer } from '~/widgets/footer'
import { Header } from '~/widgets/header'

type Props = {
  children: React.ReactNode
}

function AppLayout({ children }: Props) {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  )
}

export { AppLayout }
