// * Framework and other tools
import Vue       from 'vue'
import VueRouter from 'vue-router'

// * Views
import Home from '../views/Home.vue'

// Trial
import Trial         from '../views/Trial.vue'
import Trial_first   from '../views/Trial_first.vue'
import Trial_second  from '../views/Trial_second.vue'
import Trial_loader  from '../views/Trial_loader.vue'
import Trial_result  from '../views/Trial_result.vue'

// Login and Sign Up
import Login         from '../views/Login.vue'
import SignUp        from '../views/SignUp.vue'
import SignUp_kol    from '../views/SignUp_kol.vue'
import SignUp_firm   from '../views/SignUp_firm.vue'
import SignUp_loader from '../views/SignUp_loader.vue'

// KOL
import Kol               from '../views/Kol.vue'
import Kol_msg           from '../views/Kol_msg.vue'
import Kol_msgDialog     from '../views/Kol_msgDialog.vue'
import Kol_consult       from '../views/Kol_consult.vue'
import Kol_consultDetail from '../views/Kol_consultDetail.vue'
import Kol_sucess        from '../views/Kol_sucess.vue'
import Kol_sucessDetail  from '../views/Kol_sucessDetail.vue'
import Kol_search        from '../views/Kol_search.vue'
import Kol_saveFirm      from '../views/Kol_saveFirm.vue'
import Kol_saveCase      from '../views/Kol_saveCase.vue'
import Kol_passCase      from '../views/Kol_passCase.vue'
import Kol_setting       from '../views/Kol_setting.vue'

// * Router
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
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
            },
            {
                path: 'msgDialog',
                name: 'Kol_msgDialog',
                component: Kol_msgDialog
            },
            {
                path: 'consult',
                name: 'Kol_consult',
                component: Kol_consult
            },
            {
                path: 'consultDetail',
                name: 'Kol_consultDetail',
                component: Kol_consultDetail
            },
            {
                path: 'sucess',
                name: 'Kol_sucess',
                component: Kol_sucess
            },
            {
                path: 'sucessDetail',
                name: 'Kol_sucessDetail',
                component: Kol_sucessDetail
            },
            {
                path: 'search',
                name: 'Kol_search',
                component: Kol_search
            },
            {
                path: 'savefirm',
                name: 'Kol_saveFirm',
                component: Kol_saveFirm
            },
            {
                path: 'savecase',
                name: 'Kol_saveCase',
                component: Kol_saveCase
            },
            {
                path: 'passcase',
                name: 'Kol_passCase',
                component: Kol_passCase
            },
            {
                path: 'setting',
                name: 'Kol_setting',
                component: Kol_setting,
                
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