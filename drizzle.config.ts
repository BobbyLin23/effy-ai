import process from 'node:process'
import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({
  path: '.env',
})

export default defineConfig({
  out: './drizzle',
  schema: './schemas/*',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})
