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
      domains: ['image.tmdb.org'],
    alias: {
      tmdb: 'https://image.tmdb.org/t/p/w500'
    }
  },

  css: [
    "@/assets/styles/scss/style.css",
    "primeicons/primeicons.css",
    "primevue/resources/primevue.min.css",
    "primevue/resources/themes/saga-blue/theme.css",
  ],

  tailwindcss: {
    config: {
      content: ["presets/**/*.{js,vue,ts}"],
      theme: {
        extend: {
          colors: {
            "primary-50": "rgb(var(--primary-50))",
            "primary-100": "rgb(var(--primary-100))",
            "primary-200": "rgb(var(--primary-200))",
            "primary-300": "rgb(var(--primary-300))",
            "primary-400": "rgb(var(--primary-400))",
            "primary-500": "rgb(var(--primary-500))",
            "primary-600": "rgb(var(--primary-600))",
            "primary-700": "rgb(var(--primary-700))",
            "primary-800": "rgb(var(--primary-800))",
            "primary-900": "rgb(var(--primary-900))",
            "primary-950": "rgb(var(--primary-950))",
            "surface-0": "rgb(var(--surface-0))",
            "surface-50": "rgb(var(--surface-50))",
            "surface-100": "rgb(var(--surface-100))",
            "surface-200": "rgb(var(--surface-200))",
            "surface-300": "rgb(var(--surface-300))",
            "surface-400": "rgb(var(--surface-400))",
            "surface-500": "rgb(var(--surface-500))",
            "surface-600": "rgb(var(--surface-600))",
            "surface-700": "rgb(var(--surface-700))",
            "surface-800": "rgb(var(--surface-800))",
            "surface-900": "rgb(var(--surface-900))",
            "surface-950": "rgb(var(--surface-950))",
          },
        },
      },
    },
  },

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
