<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod'
import { Loader2Icon } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { toast } from 'vue-sonner'
import { z } from 'zod'

const router = useRouter()

const formSchema = toTypedSchema(
  z.object({
    name: z.string().min(1),
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
  await authClient.signUp.email({
    email: values.email,
    password: values.password,
    name: values.name,
  }, {
    onSuccess: () => {
      toast.success('Account created successfully')
      router.push('/workspaces')
    },
    onError: (ctx) => {
      toast.error(ctx.error.message)
    },
  })
  isLoading.value = false
})
</script>

<template>
  <form class="flex flex-col gap-y-6" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="name">
      <FormItem>
        <FormLabel>Name</FormLabel>
        <FormControl>
          <Input type="text" placeholder="John Doe" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
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
    <Button class="w-full" type="submit" :disabled="isLoading">
      <Loader2Icon v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
      Register
    </Button>
    <div class="text-center text-sm">
      Already have an account?
      <NuxtLink to="/sign-in" class="hover:underline underline-offset-4">
        Sign in
      </NuxtLink>
    </div>
  </form>
</template>
