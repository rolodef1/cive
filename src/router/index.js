import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Comentarios from '../views/Formularios/Comentarios.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/formularios/comentarios',
    name: 'formularios-comentarios',
    component: Comentarios
  },
]

const router = new VueRouter({
  routes
})

export default router
