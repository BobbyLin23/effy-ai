// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/icon',
  ],
  css: ['~/assets/css/main.css'],
  devServer: {
    port: 3019,
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  components: [
    '~/components',
    {
      path: '~/components/ui',
      pathPrefix: false,
    },
    {
      path: '~/components/auth',
      pathPrefix: false,
    },
  ],
})
