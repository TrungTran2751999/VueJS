import { createApp } from 'vue'
import App from './App.vue'
import router from './index'
import store from './store'

createApp(App).use(router).use(store).mount('#app')
