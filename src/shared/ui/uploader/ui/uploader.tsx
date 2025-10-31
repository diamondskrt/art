'use client'

import { UploadIcon } from 'lucide-react'
import { useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { toast } from 'sonner'

import { MAX_FILES, MAX_FILE_SIZE } from '~/shared/config'
import { Button } from '~/shared/ui'

import { UploaderProps } from '../model'

export function Uploader({
  onUploadAction,
  maxFiles = MAX_FILES,
}: UploaderProps) {
  const { getRootProps, getInputProps, fileRejections, isDragActive } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        onUploadAction?.(acceptedFiles)
      },
      accept: {
        'image/*': ['.png', '.jpg', '.jpeg', '.webp'],
      },
      maxFiles,
      maxSize: MAX_FILE_SIZE,
      onError: (error) => {
        toast.error(error.message)
      },
    })

  useEffect(() => {
    if (fileRejections.length === 0) return
    toast.error(fileRejections[0].errors[0].code)
  }, [fileRejections])

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Button size="icon" className="cursor-pointer">
        <UploadIcon className="w-4 h-4" />
      </Button>
      {isDragActive && (
        <p className="text-sm text-gray-500">
          Drag and drop your file here or click to upload
        </p>
      )}
    </div>
  )
}
