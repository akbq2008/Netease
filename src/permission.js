import router from './router'
import store from './store'
import {
  getToken
} from '@/utils/auth' // getToken from cookie

// permission judge function
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login', '/phoneLogin', '/register'] // no redirect whitelist

router.beforeEach((to, from, next) => {
  //   NProgress.start() // start progress bar
  if (getToken()) { // determine if there has token
    /* has token*/
    if (to.path === '/login') {
      next({
        path: '/'
      })
      //   NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {

      if (store.getters.userInfo.length === 0) { // 判断当前用户是否已拉取完user_info信息
        store.getters.id ? store.getters.id : store.dispatch("setId", localStorage.getItem("userId"));
        store.dispatch('getUserInfo', store.getters.id).then(res => { // 拉取user_info
          next();
        }).catch((err) => {
          console.log(err)
          store.dispatch('LogOut').then(() => {
            console.log("Verification failed, please login again");
            // Message.error(err || 'Verification failed, please login again')
            next({
              path: '/'
            })
          })
        })
      } else {
        // console.log("拦截")
        next()
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        // if (hasPermission(store.getters.roles, to.meta.roles)) {
        //   next()
        // } else {
        //   next({
        //     path: '/401',
        //     replace: true,
        //     query: {
        //       noGoBack: true
        //     }
        //   })
        // }
        // 可删 ↑
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
      //   NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

// router.afterEach(() => {
//   NProgress.done() // finish progress bar
// })
