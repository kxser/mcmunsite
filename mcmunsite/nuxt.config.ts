// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    meta: [
      {
        'http-equiv': 'Content-Security-Policy',
        content: "upgrade-insecure-requests; script-src 'self' *.cloudflareinsights.com; connect-src 'self' blob: https://mcmun.com.tr wss://https://mcmun.com; media-src 'self' https:; img-src 'self' data: blob: https:; default-src 'none'; base-uri 'self'; frame-ancestors 'none'; style-src 'self' 'unsafe-inline'; font-src 'self'; manifest-src 'self'"
      }
    ],
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  colorMode: {
    preference: "dark",
  },
  devtools: { enabled: true },

  modules: ['@nuxt/icon', '@nuxt/ui', '@nuxt/image', '@nuxtjs/google-fonts', '@formkit/auto-animate/nuxt', 'nuxt-countdown', '@nuxtjs/device', '@nuxtjs/robots', '@nuxtjs/sitemap', 'nuxt-site-config', 'nuxt-booster', '@sidebase/nuxt-auth'],
  auth: {
    isEnabled: true,
    disableServerSideAuth: false,
    originEnvKey: 'AUTH_ORIGIN',
    baseURL: process.env.AUTH_BASE_URL ?? "http://localhost:3000/api/auth",
    sessionRefresh: {
      enablePeriodically: true,
      enableOnWindowFocus: true,
    },
    provider: {
      type: 'authjs',
      trustHost: false,
      defaultProvider: 'google',
      addDefaultCallbackUrl: true
    }},


  runtimeConfig: {
    public: { 
      turnstileSiteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY ?? "",
      pageSecurityIsEnabled: process.env.NUXT_PUBLIC_PAGE_SECURITY_IS_ENABLED ?? "",
      applicationCloseDate: process.env.NUXT_PUBLIC_APPLICATION_CLOSE_DATE ?? "",
    },
    turnstileSecretKey: process.env.NUXT_TURNSTILE_SECRET_KEY ?? "",
    mailerPassword: process.env.NUXT_MAILER_PASSWORD ?? "",
    mailerMail: process.env.NUXT_MAILER_MAIL ?? "",
    adminMailAdresses: process.env.NUXT_ADMIN_MAIL_ADRESSES ?? "",
    authSecret: process.env.NUXT_AUTH_SECRET ?? "",
    googleClientId: process.env.NUXT_GOOGLE_CLIENT_ID ?? "",
    googleClientSecret: process.env.NUXT_GOOGLE_CLIENT_SECRET ?? "",

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
      "PT Serif": {
        wght: "100..1000",
        ital: "100..1000",
      },
    },
  },
})