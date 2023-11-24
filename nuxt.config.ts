import vuetify from 'vite-plugin-vuetify'
// nuxt.config.ts
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in'
    }
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '@/assets/main.scss',
  ],
  build: {
    transpile: ["vuetify"],
  },
  plugins: [
    '~/plugins/sharect.client.ts'
  ],
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    // Add vuetify plugin into vite
    async (options, nuxt) => {
      // @ts-ignore
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
        vuetify()
      ))
    },
  ],
  vite: {
    // ssr: {
    //   noExternal: ["vuetify"], // add the vuetify vite plugin
    // }
  },
  googleFonts: {
    families: {
      Inter: [400, 700],
      Merriweather: {
        wght: [300, 700],
        ital: [100]
      },
      'Space Grotesk': [400, 700]
    }
  }
})
