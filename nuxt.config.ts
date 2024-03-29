// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  generate: {
    fallback: true
  },
  css: ['/public/assets/bootstrap.css'],
})
