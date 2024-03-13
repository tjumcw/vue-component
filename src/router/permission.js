// import router from "./index";
// import store from "@/store";
//
// /**
//  * 有token，访问登录直接跳首页，没有token且不在域名白名单的，回到登录页重新登陆
//  */
// const whiteDomainList = ["/login"];
// router.beforeEach((to, from, next) => {
//     if (store.getters.token) {
//         if (to.path === "/login" || to.path === "/") {
//             if (store.getters.userInfo.includes("学生")) {
//                 next({ path: "/home" })
//             } else {
//                 next({ path: "/userCenter" });
//             }
//         } else {
//             // 如果已登录，正常访问即可，但是需要判断是否是有效路由
//             const isValid = isValidRoute(router.options.routes, to.path);
//             isValid ? next() : next("/error");
//         }
//     } else {
//         whiteDomainList.includes(to.path) ? next() : next("/login");
//     }
// });
//
// const isValidRoute = (routes, path) => {
//     return routes.some((route) => {
//         if (route.path === path) {
//             return true;
//         }
//         // 递归查找子路由
//         if (route.children) {
//             return isValidRoute(
//                 route.children.map((subRoute) => ({
//                     ...subRoute,
//                     path: route.path + "/" + subRoute.path,
//                 })),
//                 path
//             );
//         }
//         // 都没找到返回false
//         return false;
//     });
// };
