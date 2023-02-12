import { createApp } from 'vue'
import App from './App.vue'

// PrimeVue
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-blue/theme.css'     //theme
import 'primevue/resources/primevue.min.css'                 //core css
// import 'primeicons/primeicons.css'                          //icons

// Tailwind CSS
import './style/tailwind.css'

const app = createApp(App)
app.use(PrimeVue)
app.mount('#app')
