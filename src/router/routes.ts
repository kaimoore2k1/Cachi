import { RouteRecordRaw } from 'vue-router'; //Đường dẫn, đường link

const routes: RouteRecordRaw[] = [
  //MẶC ĐỊNH CỦA VUE
  {
    name: 'MainLayout', //DUY NHẤT
    path: '/', //ĐƯỜNG DẪN DUY NHẤT
    component: () => import('layouts/MainLayout.vue'),
    children: [
      //MẢNG CHỨA CÁC PHẦN TỬ LÀ CÁC ROUTES KHÁC NHAU
      {
        name: 'IndexPage',
        path: '', //TƯƠNG ĐƯƠNG DÒNG 6
        component: () => import('pages/IndexPage.vue'),
      },
      {
        name: 'LoginPage2',
        path: '/page2', // CHỈ NỐI VỚI CHA
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
    path: '/:catchAll(.*)*', //CÚ PHÁP MẶC ĐỊNH CÓ NGHĨA NẾU ROUTES KHÔNG CÓ KHAI BÁO --> 404
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
