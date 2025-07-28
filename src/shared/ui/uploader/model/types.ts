import { Image } from '~/shared/model'

type UploaderProps = {
  onUploadAction?: (files: File[]) => void
  maxFiles?: number
}

export type { Image, UploaderProps }
