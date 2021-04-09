// Framework and other tools
import Vue       from 'vue'
import VueRouter from 'vue-router'

// Views
import Home  from '../views/Home.vue'
import Trial from '../views/Trial.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: Home,
        component: Home
    },
    {
        path: '/trial',
        name: Trial,
        component: Trial,
        children:[
            {
                path: 'First'
            }
        ]
    }
]
const router = new VueRouter({
    routes
})

export default router