import Store from './store';

const getActiveRule = hash => location => location.hash.startsWith(hash);
export default [
  {
    name: 'mook', // 微应用的名称，微应用之间必须保持唯一。
    entry: '//localhost:60009', // 微应用的入口
    container: '#mook', // 微应用的容器结点的选择器或者Element实例。
    activeRule: getActiveRule('#/mook'),
    props: { data: {a: 11111} }
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
]
