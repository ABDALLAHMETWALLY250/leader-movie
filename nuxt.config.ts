// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],

  app: {
    head: {
      title: "Leader Movie",
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

  css: ["@/assets/styles/scss/style.css"],
});
