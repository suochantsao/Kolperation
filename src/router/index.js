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
import SignUp from '../views/SignUp.vue'
import SignUp_kol from '../views/SignUp_kol.vue'
import SignUp_firm from '../views/SignUp_firm.vue'
import SignUp_loader from '../views/SignUp_loader.vue'
import Kol from '../views/Kol.vue'
import Kol_msg from '../views/Kol_msg.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/trial',
        name: 'Trial',
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
    },
    {
        path: '/loader',
        name: 'SignUp_loader',
        component: SignUp_loader
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp,
        children:[
            {
                path: 'kol',
                name: 'SignUp_kol',
                component: SignUp_kol
            },
            {
                path: 'firm',
                name: 'SignUp_firm',
                component: SignUp_firm
            }
        ]
    },
    {
        path: '/kolplat',
        name: 'KolPlat',
        component: Kol,
        children:[
            {
                path: 'msg',
                name: 'Kol_msg',
                component: Kol_msg
            }
        ]
    }
]

const router = new VueRouter({
    routes,
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
})

export default router