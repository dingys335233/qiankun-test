import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false
Vue.use(ElementUI);

const getActiveRule = hash => location => location.hash.startsWith(hash);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

registerMicroApps([
  {
    name: 'mook', // 微应用的名称，微应用之间必须保持唯一。
    entry: '//localhost:60001', // 微应用的入口
    container: '#mook', // 微应用的容器结点的选择器或者Element实例。
    activeRule: '#/mook' //
  }
]);

start();
