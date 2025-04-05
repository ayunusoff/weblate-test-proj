import { createApp } from 'vue'
import App from './App.vue'
import { setupI18n } from './i18n'

async function mountApp() {
  const i18n = await setupI18n()
  const app = createApp(App)
  app.use(i18n)
  app.mount('#app')
}

mountApp()