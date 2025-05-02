import { FieldValues, FormProvider } from 'react-hook-form'

import { cn } from '~/shared/lib'

import { FormProps } from '../model'

function Form<T extends FieldValues>({
  children,
  onSubmit,
  className,
  ...props
}: FormProps<T>) {
  return (
    <FormProvider {...props}>
      <form onSubmit={props.handleSubmit(onSubmit)} className={cn(className)}>
        {children}
      </form>
    </FormProvider>
  )
}

export { Form }
