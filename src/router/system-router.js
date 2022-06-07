// 系统管理的路由
const resolve = path => () => import('@/views/' + path + '.vue');

export default [
  {
    path: 'System',
    name: 'SystemMain',
    component : resolve('system-setting/system-main/system-main'),
    children: [
      {
        path: 'PlatformInfo',
        name: 'PlatformInfo',
        component : resolve('system-setting/platform-info/platform-info')
      },
      {
        path: 'UserManage',
        name: 'UserManage',
        component : resolve('system-setting/user-manage/user-manage')
      },
      {
        path: 'Functions',
        name: 'Functions',
        component : resolve('system-setting/module-config/module-config')
      }
    ]
  }
  // {
  //   path: '/system',
  //   name: 'SystemMain',
  //   component : resolve('system-setting/system-main/system-main')
  // },
  // {
  //   path: '/system',
  //   name: 'SystemMain',
  //   component : resolve('system-setting/system-main/system-main')
  // }
];
