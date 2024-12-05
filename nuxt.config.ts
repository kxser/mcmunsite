// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    'nuxt-link-checker',
    '@formkit/auto-animate/nuxt',
    'nuxt-countdown',
    '@formkit/nuxt'
  ],
  googleFonts: {
    download: true,
    stylePath: "public/google-fonts.css",
    overwriting: false,
    inject: true,
    display: "block",
    families: {
      "DM Sans": {
        wght: "100..1000",
        ital: "100..1000",
      },
    },
  },
})