import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Teachers from '../views/Teachers.vue'
import Students from '../views/Students.vue'
import EachOne from '../views/EachOne.vue'
import E404 from '../views/e404.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/teachers',
    name: 'Teachers',
    component: Teachers
  },
  {
    path: '/students',
    name: 'Students',
    component: Students
  },  {
    path: '/single/:cat/:id',
    name: 'EachOne',
    component: EachOne
  },
  {
    path: '*',
    component: E404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
