// Framework and other tools
import Vue       from 'vue'
import VueRouter from 'vue-router'

// Views
import home  from '../views/home.vue'
import trial from '../views/trial.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Kolperation home',
        component: home
    },
    {
        path: '/trial',
        name: 'trial platform',
        component: trial

    }
]
const router = new VueRouter({
    routes
})

export default router