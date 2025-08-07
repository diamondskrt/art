import Image from 'next/image'

type OImageProps = {
  url: string
  name: string
}

export function OImage({ url, name }: OImageProps) {
  return (
    <Image
      src={url}
      alt={name}
      fill
      placeholder="blur"
      blurDataURL="/assets/img/placeholder.webp"
      className="object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  )
}
