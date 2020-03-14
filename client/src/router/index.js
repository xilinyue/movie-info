import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {path: '/register', name: 'register', component: () => import("../views/user/register.vue")},
  {path: '/login', name: 'login', component: () => import("../views/user/login.vue")},
  {path: '/movie',name: 'movie',component: () => import('../views/movie/movie.vue'),
  children: [
    {path: 'create', name: 'movie-create', component: () => import("../views/movie/create.vue")},
    {path: 'list', name: 'movie-list', component: () => import("../views/movie/list.vue")}
  ]}

]

const router = new VueRouter({
  routes
})

export default router
