import Vue from 'vue'
import Router from 'vue-router'
import Login from "./pages/Login.vue"

Vue.use(Router)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        name: 'tela_inicial',
        component: () => import('./views/TelaInicial.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('./views/Home.vue')
    },
    {
        path: '/nova',
        name: 'nova_coleta',
        component: () => import('./views/Nova.vue')
    },
    {
        path: '/editar/:id',
        name: 'editar_coleta',
        component: () => import('./views/Nova.vue'),
        props:true,
    },
    {
        path: '/lista',
        name: 'listagem_coleta',
        component: () => import('./views/Lista.vue'),
    },
]

const router = new Router({
    base:process.env.BASE_URL + '/home',
    routes,
})

export default router;
