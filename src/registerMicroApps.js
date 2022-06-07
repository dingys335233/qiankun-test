// 子应用切花加载进度条import NProgress from 'nprogress'
import Store from './store';
import apps from './microApps.js';

// 注册微应用
import { registerMicroApps, addGlobalUncaughtErrorHandler, initGlobalState, start } from 'qiankun';

// 微应用通信，定义全局vuex，并返回通过通信方法
const state = {};
const actions = initGlobalState(state);
actions.setGlobalState({
  globalToken: 'yyyyy'
});

registerMicroApps(apps, {
  beforeLoad: (app) => {
    console.log('before load ', app.name);
    // if (Store.state.token) {
    // actions.setGlobalState({ globalToken:  })
    // }
    return Promise.resolve();
  },
  afterMount: (app) => {
    console.log('after load ', app.name);

    return Promise.resolve();
  }
});

addGlobalUncaughtErrorHandler((event) => {
  const {message: msg} = event;
  if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
    console.log('微应用加载失败，请检查应用是否可以运行！');
  }
});

export default start;

export { actions };
