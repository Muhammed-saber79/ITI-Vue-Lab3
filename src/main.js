import { createApp } from 'vue'
import { createPinia } from 'pinia'

import LandingComponent from "./components/Layouts/LandingComponent"
import StateCounter from "./components/StateManagement/StateCounter"
import router from './routers/index'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// register routes before mounting...
const app = createApp(StateCounter)
const pinia = createPinia(app)


app.use(router)
app.use(pinia)
app.mount('#app')