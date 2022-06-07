import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import { registerMicroApps, initGlobalState } from 'qiankun';

Vue.config.productionTip = false
Vue.use(ElementUI);

const getActiveRule = hash => location => location.hash.startsWith(hash);

/**
 * 当主应用是hash模式的时候，一般微应用也是hash模式。
 * 主应用的一级hash路径会分配给对应的微应用
 * 当微应用信息注册完之后，一旦浏览器的 url 发生变化，便会自动触发 qiankun 的匹配逻辑，
 * 所有 activeRule 规则匹配上的微应用就会被插入到指定的 container 中，同时依次调用微应
 * 用暴露出的生命周期钩子。
 */

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

const actions = initGlobalState({});

registerMicroApps([
  {
    name: 'mook', // 微应用的名称，微应用之间必须保持唯一。
    entry: '//localhost:60009', // 微应用的入口
    container: '#mook', // 微应用的容器结点的选择器或者Element实例。
    activeRule: getActiveRule('#/mook'), //
    props: { actions }
  },
  {
    name: 'network', // 微应用的名称，微应用之间必须保持唯一。
    entry: '//localhost:60002', // 微应用的入口
    container: '#network', // 微应用的容器结点的选择器或者Element实例。
    activeRule: '#/network' //
  },
  {
    name: 'analysis', // 微应用的名称，微应用之间必须保持唯一。
    entry: '//localhost:60003', // 微应用的入口
    container: '#analysis', // 微应用的容器结点的选择器或者Element实例。
    activeRule: '#/analysis' //
  },
  {
    name: 'resources', // 微应用的名称，微应用之间必须保持唯一。
    entry: '//localhost:60004', // 微应用的入口
    container: '#resources', // 微应用的容器结点的选择器或者Element实例。
    activeRule: '#/resources' //
  }
]);
