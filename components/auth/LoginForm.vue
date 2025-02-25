<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod'
import { Loader2Icon } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { toast } from 'vue-sonner'
import { z } from 'zod'

const router = useRouter()

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email(),
    password: z.string().min(8),
  }),
)

const form = useForm({
  validationSchema: formSchema,
})

const isLoading = ref(false)

const onSubmit = form.handleSubmit(async (values) => {
  isLoading.value = true
  await authClient.signIn.email({
    email: values.email,
    password: values.password,
  }, {
    onSuccess: () => {
      isLoading.value = false
      toast.success('Logged in successfully')
      router.push('/workspaces')
    },
    onError: (ctx) => {
      isLoading.value = false
      toast.error(ctx.error.message)
    },
  })
})
</script>

<template>
  <form class="flex flex-col gap-y-6" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input type="email" placeholder="example@email.com" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="password">
      <FormItem>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input type="password" placeholder="********" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button class="w-full" type="submit">
      <Loader2Icon v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
      Login
    </Button>
    <div class="text-center text-sm">
      Don&apos;t have an account?
      <NuxtLink to="/sign-up" class="hover:underline underline-offset-4">
        Sign up
      </NuxtLink>
    </div>
  </form>
</template>
