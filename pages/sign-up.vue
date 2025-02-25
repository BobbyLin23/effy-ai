<script lang="ts" setup>
import { GalleryVerticalEndIcon } from 'lucide-vue-next'

definePageMeta({
  layout: 'auth',
})
</script>

<template>
  <div class="flex w-full max-w-sm flex-col gap-6">
    <NuxtLink to="/" class="flex items-center gap-2 self-center font-medium">
      <div class="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <GalleryVerticalEndIcon class="size-4" />
      </div>
      Neo Desk
    </NuxtLink>
    <AuthCard variant="register">
      <RegisterForm />
    </AuthCard>
  </div>
</template>
