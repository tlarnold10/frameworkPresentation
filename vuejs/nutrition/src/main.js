import { createApp } from 'vue'
import App from './App.vue'

// import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

loadFonts()

createApp(App)
  .use(Quasar, quasarUserOptions)
  .mount('#app')
