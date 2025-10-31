'use client'

import { Button } from '~/shared/ui'
import { cn } from '~/shared/utils'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog-items'

type Props = {
  children: React.ReactNode
  title: string
  description?: string
  cancelText?: string
  onCancelAction?: () => void
  okText?: string
  onOkAction?: () => void
}

export function Modal({
  children,
  title,
  description,
  cancelText = 'Cancel',
  onCancelAction,
  okText = 'Ok',
  onOkAction,
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        showCloseButton
        className={cn(
          'md:max-w-[500px] h-[200px] grid px-6 py-4 bg-background rounded',
          description ? 'grid-rows-[auto_1fr_auto]' : 'grid-rows-[1fr_auto]'
        )}
      >
        {title && (
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
        )}
        {description && (
          <div className="flex items-center">
            <DialogDescription>{description}</DialogDescription>
          </div>
        )}
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant="outline"
              className="cursor-pointer"
              onClick={onCancelAction}
            >
              {cancelText}
            </Button>
          </DialogClose>
          <Button
            variant="destructive"
            onClick={onOkAction}
            className="cursor-pointer"
          >
            {okText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
