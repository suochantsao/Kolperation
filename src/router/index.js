// Framework and other tools
import Vue       from 'vue'
import VueRouter from 'vue-router'

// Views
import Home  from '../views/Home.vue'
import Trial from '../views/Trial.vue'
import Trial_first from '../views/Trial_first.vue'
import Trial_second from '../views/Trial_second.vue'
import Trial_loader from '../views/Trial_loader.vue'
import Trial_result from '../views/Trial_result.vue'
import Login from '../views/Login.vue'

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
        redirect: '/trial/first',
        children:[
            {
                path: 'first',
                name: 'First',
                component: Trial_first
            },
            {
                path: 'second',
                name: 'Second',
                component: Trial_second
            },
            {
                path: 'loader',
                name: 'Loader',
                component: Trial_loader
            },
            {
                path: 'result',
                name: 'Result',
                component: Trial_result
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]
const router = new VueRouter({
    routes
})

export default router