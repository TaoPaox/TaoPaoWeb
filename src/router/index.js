import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './../config/app'
import Home from '../pages/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: '关于',
      requireAuth: true
    },
    component: () => import('../pages/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '注册登录',
      requireAuth: false
    },
    component: () => import('../pages/login/Login.vue')
  }
]

const router = new VueRouter({
  routes
})


// 解决多次点击重复路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }

  if (to.matched.some(res => res.meta.requireAuth)) {
    // 判断是否需要登录权限
    if (to.meta.requireAuth) {
      //先判断是否登录
      if (app.isLogin()) {
        next();
      } else {
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          }
        })
      }
    } else {
      next();
    }
  } else {
    next()
  }

})

export default router