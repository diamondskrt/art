'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
  loginUser,
  LoginPayload,
  loginFormSchema,
  USER_KEY,
} from '~/entities/user'
import { setKey, removeKey, Link, useRouter } from '~/shared/lib'
import { Button, Typography, Form, FormFieldItem } from '~/shared/ui'

function SignInForm() {
  const router = useRouter()

  const form = useForm<LoginPayload>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (values: LoginPayload) => {
    try {
      const user = await loginUser(values)
      setKey({ key: USER_KEY, data: user })
      router.push('/')
      toast.success('Login successful')
    } catch (error) {
      removeKey(USER_KEY)
      toast.error((error as Error).message)
    }
  }

  return (
    <Form {...form} onSubmit={onSubmit} className="w-[350px] space-y-4">
      <Typography variant="h4" className="text-center">
        Sign in
      </Typography>

      <FormFieldItem<LoginPayload>
        control={form.control}
        name="email"
        placeholder="Enter your username"
      />
      <FormFieldItem<LoginPayload>
        control={form.control}
        name="password"
        type="password"
        placeholder="Enter your password"
      />
      <div className="flex items-center justify-between">
        <Button type="submit" className="cursor-pointer">
          Sign in
        </Button>
        <Button variant="link" asChild>
          <Link href="/home">Back to home</Link>
        </Button>
      </div>
    </Form>
  )
}

export { SignInForm }
