import { createApp } from 'vue'

//PINIAAAAAAAAH
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

//PINIAAAAAAAAH
app.use(createPinia())


app.use(router)

app.mount('#app')
