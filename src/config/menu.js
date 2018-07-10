export default [
  {
    title: '系统设置',
    path: '/system',
    level: 0,
    children: [
      {
        title: '角色设置',
        path: '/system/role',
        level: 1,
      },
      {
        title: '权限设置',
        path: '/system/jurisdiction',
        level: 1,
      },
      {
        title: '用户设置',
        path: '/system/user',
        level: 1,
      },
    ],
  },
  {
    title: '系统设置',
    path: '/home',
    level: 0,
    children: [
      {
        title: '角色设置',
        path: '/home/roles',
        level: 1,
      },
      {
        title: '权限设置',
        path: '/home/jurisdictions',
        level: 1,
      },
      {
        title: '用户设置',
        path: '/home/users',
        level: 1,
      },
    ],
  },
];
