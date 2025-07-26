'use client'

import { TrashIcon, UploadIcon } from 'lucide-react'
import Image from 'next/image'
import { useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { toast } from 'sonner'

import { Button, Typography } from '~/shared/ui'

interface UploaderProps {
  files: File[]
  onUploadAction: (files: File[]) => void
}

export function Uploader({ onUploadAction, files }: UploaderProps) {
  const { getRootProps, getInputProps, fileRejections, isDragActive } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        onUploadAction(acceptedFiles)
      },
      accept: {
        'image/*': ['.png', '.jpg', '.jpeg', '.webp'],
      },
      maxFiles: 5,
      maxSize: 10 * 1024 * 1024,
      onError: (error) => {
        toast.error(error.message)
      },
    })

  const onRemoveFile = (file: File) => {
    onUploadAction(files.filter((f) => f.name !== file.name))
  }

  useEffect(() => {
    if (fileRejections.length === 0) return
    toast.error(fileRejections[0].errors[0].code)
  }, [fileRejections])

  return (
    <>
      <div
        {...getRootProps()}
        className="flex flex-col items-center justify-center w-full h-full border-dashed border border-gray-300 rounded p-4"
      >
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
      <div className="grid grid-cols-4 gap-2 w-full">
        {files.length > 0 &&
          files.map((file) => (
            <div
              key={file.name}
              className="flex w-full aspect-square flex-col items-center gap-2"
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <Image
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="cursor-pointer text-white size-8"
                    onClick={() => onRemoveFile(file)}
                  >
                    <TrashIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <Typography
                variant="p"
                className="w-full text-sm text-center truncate"
              >
                {file.name}
              </Typography>
            </div>
          ))}
      </div>
    </>
  )
}
