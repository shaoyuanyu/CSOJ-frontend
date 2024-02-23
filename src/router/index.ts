import { createRouter, createWebHistory } from 'vue-router'
import type { AuthEnum } from '@/common/access/authEnum'
import {
  competition_routes,
  error_routes,
  problem_routes,
  submission_routes,
  top_routes,
  train_routes,
  discussion_routes
} from '@/router/routes'

// 定义route meta
declare module 'vue-router' {
  interface RouteMeta {
    title: string
    requiredAuth?: AuthEnum
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // top level routes
    {
      path: '/',
      name: 'nav',
      redirect: '/home',
      component: () => import('@/layouts/BasicLayout.vue'),
      children: top_routes
    },

    // second level routes
    {
      path: '/',
      component: () => import('@/layouts/BasicLayout.vue'),
      children: [...problem_routes, ...submission_routes, ...train_routes, ...competition_routes, ...discussion_routes, ...error_routes]
    },

    // login route
    {
      path: '/login',
      meta: { title: '登录' },
      component: () => import('@/views/LoginView.vue')
    }
  ]
})

export default router
