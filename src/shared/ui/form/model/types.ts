import {
  Control,
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  FormProviderProps,
  Path,
  UseFormStateReturn,
} from 'react-hook-form'

type FormItemContextValue = {
  id: string
}

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

type FormProps<T extends FieldValues> = Omit<
  React.HTMLAttributes<HTMLFormElement>,
  'onSubmit'
> &
  FormProviderProps<T> & {
    onSubmit: (values: T) => void
  }

type RenderParams<T extends FieldValues> = {
  field: ControllerRenderProps<T, Path<T>>
  fieldState: ControllerFieldState
  formState: UseFormStateReturn<T>
}

type FormFieldItemType = 'text' | 'email' | 'password' | 'number' | 'price'

type FormFieldItemProps<T extends FieldValues> =
  React.HTMLAttributes<HTMLDivElement> & {
    control: Control<T>
    name: Path<T>
    label?: string
    placeholder?: string
    description?: string
    type?: FormFieldItemType
    render?: ({
      field,
      fieldState,
      formState,
    }: RenderParams<T>) => React.ReactNode
  }

type FormFieldInputProps<T extends FieldValues> = RenderParams<T> &
  Pick<FormFieldItemProps<T>, 'placeholder' | 'type'>

export type {
  FormFieldContextValue,
  FormFieldInputProps,
  FormFieldItemProps,
  FormItemContextValue,
  FormProps,
}
