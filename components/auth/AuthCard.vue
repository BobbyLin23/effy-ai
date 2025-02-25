<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
  variant?: 'login' | 'register'
}>()

function handleSocialLogin(provider: 'github' | 'google') {
  // console.log(provider)
}
</script>

<template>
  <div :class="cn('flex flex-col gap-6', props.class)">
    <Card>
      <CardHeader class="text-center">
        <CardTitle class="text-xl">
          {{ variant === 'login' ? 'Welcome back' : 'Create an account' }}
        </CardTitle>
        <CardDescription>
          {{ variant === 'login' ? 'Login with your account' : 'Create an account to get started' }}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid gap-6">
          <div class="flex flex-col gap-4">
            <Button
              variant="outline"
              class="w-full"
              @click="handleSocialLogin('github')"
            >
              <Icon name="mdi:github" class="mr-2 size-4" />
              Login with Github
            </Button>
            <Button
              variant="outline"
              class="w-full"
              @click="handleSocialLogin('google')"
            >
              <Icon name="mdi:google" class="mr-2 size-4" />
              Login with Google
            </Button>
          </div>
          <div class="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span class="relative z-10 bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
          <slot />
        </div>
      </CardContent>
    </Card>
    <div class="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
      By clicking continue, you agree to our <a href="#">Terms of Service</a> and
      <a href="#">Privacy Policy</a>.
    </div>
  </div>
</template>
