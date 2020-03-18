import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/home',
      component: () => import('../views/Home.vue'),
      redirect: '/welcome',
      children: [
        {
          path: '/welcome',
          component: () => import('../views/Welcome.vue'),
        },
        {
          path: '/users',
          component: () => import('../views/user/Users.vue'),
        },
        {
          path: '/rights',
          component: () => import('../views/power/Rights.vue'),
        },
        {
          path: '/roles',
          component: () => import('../views/power/Roles.vue'),
        },
        {
          path: '/categories',
          component: () => import('../views/goods/Categories.vue'),
        },
        {
          path: '/params',
          component: () => import('../views/goods/Params.vue'),
        },
        {
          path: '/goods',
          component: () => import('../views/goods/List.vue'),
        },
        {
          path: '/goods/add',
          component: () => import('../views/goods/Add.vue'),
        }
      ]
    }
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  //     next()  放行    next('/login')  强制跳转

  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
