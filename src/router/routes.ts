import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'MainLayout',
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'IndexPage',
        path: '',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        name: 'LoginPage2',
        path: '/page2',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        name: 'LoginPage3',
        path: '/page3',
        component: () => import('pages/IndexPage.vue'),
      },
    ],
  },
  {
    name: 'LoginPage',
    path: '/login',
    component: () => import('src/pages/LoginPage.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
