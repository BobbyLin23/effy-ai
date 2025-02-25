<script lang="ts" setup>
import { LogOutIcon, UserIcon } from 'lucide-vue-next'
import { toast } from 'vue-sonner'

const router = useRouter()

const session = await authClient.getSession()

async function handleLogout() {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        toast.success('Logged out successfully')
        router.push('/sign-in')
      },
    },
  })
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Avatar>
        <AvatarImage :src="session?.data?.user?.image ?? ''" />
        <AvatarFallback>
          <UserIcon class="size-4" />
        </AvatarFallback>
      </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56">
      <DropdownMenuItem @click="handleLogout">
        <LogOutIcon class="mr-2 size-4" />
        <span>Log out</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
