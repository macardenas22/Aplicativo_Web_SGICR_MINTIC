import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/propietarios',
    name: 'propietarios',
    component: () => import(/* webpackChunkName: "about" */ '../views/propietarios.vue')
  },
  {
    path: '/conjuntos',
    name: 'conjuntos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Conjuntos.vue')
  }
  ,
  {
    path: '/apartamentos',
    name: 'apartamentos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Apartamentos.vue')
  }
  ,
  {
    path: '/cuentas_cobro',
    name: 'cuentas_cobro',
    component: () => import(/* webpackChunkName: "about" */ '../views/CuentasCobro.vue')
  },
  {
    path: '/recaudos_pago',
    name: 'recaudos_pago',
    component: () => import(/* webpackChunkName: "about" */ '../views/RecaudosPago.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
