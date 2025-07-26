'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { LoginPayload, loginFormSchema } from '~/entities/user'
import { Link, useRouter, useAuth } from '~/shared/lib'
import { Button, Typography, Form, FormFieldItem } from '~/shared/ui'

import { defaultValues } from '../config'

function SignInForm() {
  const router = useRouter()

  const form = useForm<LoginPayload>({
    resolver: zodResolver(loginFormSchema),
    defaultValues,
  })

  const { login, isLoading } = useAuth()

  const onSubmit = async (values: LoginPayload) => {
    try {
      await login(values)
      router.push('/drawings/list')
      toast.success('Login successful')
    } catch (error) {
      toast.error((error as Error).message)
    }
  }

  return (
    <Form {...form} onSubmit={onSubmit} className="w-[350px] space-y-4">
      <Typography variant="h4" className="text-center">
        Sign in
      </Typography>

      <FormFieldItem
        control={form.control}
        name="email"
        placeholder="Enter your username"
      />
      <FormFieldItem
        control={form.control}
        name="password"
        type="password"
        placeholder="Enter your password"
      />
      <div className="flex items-center justify-between">
        <Button type="submit" className="cursor-pointer" disabled={isLoading}>
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
