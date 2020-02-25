import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contacto from '../views/Formularios/Contacto.vue'
import Registro from '../views/Formularios/Registro.vue'
import Login from '../views/Formularios/Login.vue'
import Forgot from '../views/Formularios/Forgot.vue'
import Busqueda from '../views/Formularios/Busqueda.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/formularios/contacto',
    name: 'formularios-contacto',
    component: Contacto
  },
  {
    path: '/formularios/registro',
    name: 'formularios-registro',
    component: Registro
  },
  {
    path: '/formularios/login',
    name: 'formularios-login',
    component: Login
  },
  {
    path: '/formularios/forgot',
    name: 'formularios-forgot',
    component: Forgot
  },
  {
    path: '/formularios/busqueda',
    name: 'formularios-busqueda',
    component: Busqueda
  },
]

const router = new VueRouter({
  routes
})

export default router
