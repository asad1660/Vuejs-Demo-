import { createApp } from 'vue'
import App from './App.vue'
import router from './Routes/routes'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import createEventBus from './eventBus'
/* Tailwind CSS */
import './index.css'
loadFonts()
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

createApp(App)
.use(ElementPlus)
.use(store)
  .use(vuetify)
  .use(router)
  .provide('eventBus', createEventBus())
  .mount('#app')
