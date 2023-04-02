import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import { StateInterface } from '../store';
import routes from './routes';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route<StateInterface>(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory; //Mặc định khởi tạo của tv

  const Router = createRouter({
    //HÀM KHỞI TẠO
    scrollBehavior: () => ({ left: 0, top: 0 }), //THUỘC TÍNH HÀM KHỞI TẠO
    routes, //IMPORT FILE ROUTES.JS

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(
      //TRANG TRƯỚC
      process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE
    ),
  });

  Router.beforeEach((to, from, next) => {
    //FROM: ROUTER SẮP CHUYỂN   TO:RT HIỆN TẠI      NEXT:  chỉ dùng cho beforeeach
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path); //HÀM JS
    const loggedIn = localStorage.getItem('user'); //KIỂM TRA USER TỪ NƠI LƯU DỮ LIỆU //BIẾN LOCAL STORAGE CÓ Ở MỌI TRANG KHÔNG CẦN
    if (authRequired && !loggedIn) {
      return next('/login');
    }
    if (!authRequired && loggedIn) {
      return next('/');
    }
    next();
  });

  return Router;
});
