import Image from 'next/image'

type OImageProps = React.ComponentProps<typeof Image>

export function OImage({ alt, ...props }: OImageProps) {
  return (
    <Image
      fill
      alt={alt || 'image'}
      placeholder="blur"
      blurDataURL="/assets/img/placeholder.webp"
      className="object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      {...props}
    />
  )
}
