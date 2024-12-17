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
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@formkit/auto-animate/nuxt',
    'nuxt-countdown',
    '@nuxtjs/device',
  ],



  runtimeConfig: {
    public: {
      turnstileSiteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY ?? "",
    },
    turnstileSecretKey: process.env.NUXT_TURNSTILE_SECRET_KEY ?? "",
    mailerPassword: process.env.NUXT_MAILER_PASSWORD ?? "",
    mailerMail: process.env.NUXT_MAILER_MAIL ?? "",

  },




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

