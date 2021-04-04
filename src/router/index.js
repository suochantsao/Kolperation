// Framework and other tools
import Vue       from 'vue'
import VueRouter from 'vue-router'

// Views
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'Kolperation',
        component: home
    }
]
const router = new VueRouter({
    routes
})

export default router