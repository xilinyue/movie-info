import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/movie'
  },
  {path: '/register', name: 'register', component: () => import("../views/user/register.vue")},
  {path: '/login', name: 'login', component: () => import("../views/user/login.vue")},
  {path: '/movie',name: 'movie',component: () => import('../views/movie/movie.vue'),
  children: [
    {path: '', redirect: 'list'},
    {path: 'create', name: 'movie-create', component: () => import("../views/movie/create.vue"),meta: {requiresAuth: true}},
    {path: 'list', name: 'movie-list', component: () => import("../views/movie/list.vue")}
  ]}

];

const router = new VueRouter({
  routes
});

//路由守卫
router.beforeEach((to,form,next) => {
  if (to.matched.some(record => record.meta.requiresAuth)){
    //判断是否已登录
    if (store.state.isUserLogin) {
      next()
    }else{
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }else{
    next()
  }
});

export default router
