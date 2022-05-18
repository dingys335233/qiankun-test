import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const resolve = path => () => import('@/views/' + path + '.vue');

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: resolve('login/login')
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/home/homePage',
    component: resolve('main/main'),
    children: [
      {
        path: 'homePage',
        name: 'homePage',
        component: resolve('homePage/homePage')
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
