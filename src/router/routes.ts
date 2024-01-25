import type { RouteRecordRaw } from 'vue-router'

export const top_routes: RouteRecordRaw[] = [
  {
    path: '/home',
    meta: { title: '主页' },
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/problems/all',
    meta: { title: '题库' },
    component: () => import('@/views/ProblemAllView.vue')
  },
  {
    path: '/train',
    meta: { title: '训练' },
    component: () => import('@/views/TrainView.vue')
  },
  {
    path: '/competition',
    meta: { title: '比赛' },
    component: () => import('@/views/CompetitionView.vue')
  },
  {
    path: '/submission/record',
    meta: { title: '提交记录' /*requiredAuth: AuthEnum.USER*/ },
    component: () => import('@/views/SubmissionRecordView.vue')
  },
  {
    path: '/ranking',
    meta: { title: '排名' },
    component: () => import('@/views/EmptyView.vue')
  },
  {
    path: '/problems/manage',
    meta: { title: '题目管理' /*requiredAuth: AuthEnum.USER*/ },
    component: () => import('@/views/ProblemManageView.vue')
  },
  {
    path: '/about',
    meta: { title: '关于' },
    component: () => import('@/views/AbortView.vue')
  }
]

export const problem_routes: RouteRecordRaw[] = [
  {
    path: '/problem/:id(\\d+)',
    meta: { title: '浏览题目' },
    component: () => import('@/views/ProblemView.vue'),
    props: (route) => ({ id: route.params.id })
  },
  {
    path: '/problem/add',
    meta: { title: '创建题目' /*requiredAuth: AuthEnum.USER*/ },
    component: () => import('@/views/EmptyView.vue'),
    props: () => ({ type: 'add' })
  },
  {
    path: '/problem/edit/:id(\\d+)',
    meta: { title: '编辑题目' /*requiredAuth: AuthEnum.USER*/ },
    component: () => import('@/views/EmptyView.vue'),
    props: (route) => ({ type: 'edit', id: route.params.id })
  }
]

export const submission_routes: RouteRecordRaw[] = [
  {
    path: '/submission/:id(\\d+)',
    meta: { title: '提交详情' /*requiredAuth: AuthEnum.USER*/ },
    component: () => import('@/views/SubmissionView.vue'),
    props: (route) => ({ id: route.params.id })
  }
]

export const train_routes: RouteRecordRaw[] = [
  {
    path: '/train/trainSection',
    meta: { title: '浏览训练' },
    component: () => import('@/views/TrainSectionView.vue')
  }
]

export const competition_routes: RouteRecordRaw[] = [
  {
    path: '/competition/competitionSection',
    meta: { title: '浏览比赛' },
    component: () => import('@/views/CompetitionSectionView.vue')
  }
]

export const error_routes: RouteRecordRaw[] = [
  {
    path: '/404',
    meta: { title: 'Error' },
    component: () => import('@/views/EmptyView.vue')
  }
]
