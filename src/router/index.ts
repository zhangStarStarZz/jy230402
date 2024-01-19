import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/admin.vue'),
      redirect: '/gzt',
      children: [
        {
          path: '/gzt',
          name: 'gzt',
          component: () => import('../views/admin/gzt.vue')
        },
        {
          path: '/ykgl',
          name: 'ykgl',
          component: () => import('../views/admin/ykgl.vue')
        },
      ]
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/admin/add.vue')
    },
  ]
})

export default router
