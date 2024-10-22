// plugins/vuetify.ts
import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css' // Importing Material Design Icons CSS
import 'vuetify/styles' // Importing Vuetify styles

// Create vuetify instance
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi', // Specify the default icon set
  },
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vuetify) // Use Vuetify in the Nuxt app
})
  
