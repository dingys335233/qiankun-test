import Vue from 'vue';
import VueRouter from 'vue-router';
import systemRoutes from './system-router.js';
import applicationRoutes from './application-routes.js';

Vue.use(VueRouter);

const resolve = path => () => import('@/views/' + path + '.vue');

const routes = [
  {
    path: '/',
    redirect: '/login',
    component: resolve('main/main'),
    children: [
      ...systemRoutes,
      ...applicationRoutes,
      {
        path: 'home',
        name: 'home',
        component: resolve('homePage/homePage')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: resolve('login/login')
  },
  {
    path: '/mook',
    name: 'mook',
    component: resolve('main/main')
  },
  {
    path: '/mook/home/*',
    component: resolve('main/main')
  },
  {
    path: '/network',
    name: 'network',
    component: resolve('main/main')
  },
  {
    path: '/analysis',
    name: 'analysis',
    component: resolve('main/main')
  },
  {
    path: '/resources',
    name: 'resources',
    component: resolve('main/main')
  }
];

console.log(routes);

const router = new VueRouter({
  routes
});

export default router;
