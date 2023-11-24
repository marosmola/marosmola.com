import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
// import colors from 'vuetify/lib/util/colors'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    // components,
    // directives,
    theme: {
      themes: {
        light: {
          colors: {
            // primary: '#6A1B9A',
            // primary: '#5D4037',
            primary: '#229954',
            // secondary: '#D7CCC8',
            secondary: '#E9F7EF',
            background: '#fafafa'
          }
        }
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})