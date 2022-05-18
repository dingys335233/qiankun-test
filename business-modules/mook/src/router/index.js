import HomeView from '../views/HomeView.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
// if (window.__POWERED_BY_QIANKUN__) {
//   microPath = '/mook';
// }
// let microPath = '/';
Vue.use(VueRouter);
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
  }
]

// const router = new VueRouter({
//   routes
// })

const router = new VueRouter({
  mode: 'history',
  base: '/mook',
  routes
})

export default router;
