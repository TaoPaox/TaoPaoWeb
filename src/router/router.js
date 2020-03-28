import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import page1 from '../pages/page1.vue'
import page2 from '../pages/page2.vue'

Vue.use(Router)


export default new Router({


  // 解决路由跳转页面没有置顶
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },

  routes: [{
      path: '/',
      redirect: '/index',
      // 是否数据缓存
      meta: {
        keepAlive: true
      },
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        title: '修改昵称'
      },
      children: []
    }

  ]



})
