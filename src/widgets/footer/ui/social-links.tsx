import Image from 'next/image'
import Link from 'next/link'

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <Link
        href="https://www.instagram.com/elvilaart"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/icons/instagram.svg"
          alt="Instagram"
          width={20}
          height={20}
        />
      </Link>

      <Link
        href="https://www.pinterest.com/ElviLaart"
        aria-label="Pinterest"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/icons/pinterest.svg"
          alt="Pinterest"
          width={20}
          height={20}
        />
      </Link>
    </div>
  )
}
