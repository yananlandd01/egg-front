import systemComponent from './container/system';
import systemModels from './models/system';

export default [
  {
    breadCrumb: '角色管理',
    path: '/system/role',
    component: systemComponent,
    model: systemModels,
  },
  {
    breadCrumb: '权限设置',
    path: '/system/jurisdiction',
    component: systemComponent,
    model: systemModels,
  },
  {
    breadCrumb: '用户设置',
    path: '/system/user',
    component: systemComponent,
    model: systemModels,
  },
];
