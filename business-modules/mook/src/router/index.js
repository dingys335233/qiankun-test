import HomeView from '../views/HomeView.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

let microPath = '';
if (window.__POWERED_BY_QIANKUN__) {
  microPath = '/mook';
}

Vue.use(VueRouter);
const routes = [
  {
    path: microPath + '/',
    name: 'home',
    component: HomeView
  },
  {
    path:  microPath + '/home/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: microPath + '/Application',
    name: 'application',
    component: () => import(/* webpackChunkName: "about" */ '../views/application.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router;
