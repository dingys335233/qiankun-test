// 系统管理的路由
const resolve = path => () => import('@/views/' + path + '.vue');

export default [
  {
    path: 'Application',
    name: 'Application',
    component : resolve('application-setting/application-main/application-main'),
    children: [
      {
        path: 'ResourceConfig',
        name: 'ResourceConfig',
        component : resolve('application-setting/resource-config/resource-config')
      }
    ]
  },
  {
    path: '/mook/Application',
    name: 'MookConfig',
    component : resolve('application-setting/application-main/application-main')
  }
];
