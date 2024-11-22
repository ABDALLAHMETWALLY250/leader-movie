export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "nuxt-primevue",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "nuxt-swiper",
    "@nuxt/image",
  ],

  image: {
    quality: 80,
    format: ["webp"],
    domains: ["image.tmdb.org"],
  },

  css: [
    "@/assets/styles/scss/style.css",
    "primeicons/primeicons.css",
    "primevue/resources/primevue.min.css",
    "primevue/resources/themes/saga-blue/theme.css",
  ],

  app: {
    head: {
      title: "Leader Movie",
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "icon",
          href: "/favicon.ico",
        },
      ],
      meta: [
        {
          name: "description",
          content:
            "Discover the latest reviews, news, and exclusive content on Leader-Movie, your go-to source for all things cinema.",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "author",
          content: "Abdallah Mohamed",
        },
        {
          name: "keywords",
          content: "Leader-Movie, movie, reviews, news, and exclusive content",
        },
      ],
    },
  },

  i18n: {
    vueI18n: "./i18n.config.ts",
  },
});
