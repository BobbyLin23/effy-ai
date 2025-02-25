import { db } from '@/server/utils/db'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import * as authSchemas from '~/schemas/auth'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: {
      ...authSchemas,
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
})
