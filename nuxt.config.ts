// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/i18n"],

  css: ["@/assets/styles/scss/style.css"],

  tailwindcss: {
    cssPath: ["~/assets/styles/scss/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
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
