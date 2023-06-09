// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/img/logo_render.svg" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Sans&family=Nunito:wght@200;400;600&display=swap",
        },
      ],
    },
  },
});
