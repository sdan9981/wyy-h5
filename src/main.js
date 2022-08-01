import { createApp } from 'vue'
import App from './App.vue'
import fontawesome from '@/plugins/fontawesome'
import router from '@/router'
import vant from '@/plugins/vant'
import store from '@/store'

import '@/assets/sass/common.scss'
import '@/assets/js/rem.js'

const app = createApp(App)

fontawesome(app)

vant(app)

app
.use(router)
.use(store)
.mount('#app')
