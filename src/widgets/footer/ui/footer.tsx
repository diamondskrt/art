import { Typography } from '~/shared/ui'

import { SocialLinks } from './social-links'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12">
      <div className="container">
        <div className="flex items-center justify-between">
          <Typography variant="small">
            © All Rights Reserved, {currentYear}
          </Typography>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}

export { Footer }
