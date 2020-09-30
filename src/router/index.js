import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'Login',
    hide: true,
    component: Login
  },
  {
    name: '主页面',
    path: '/main',
    isSingle: true,
    hide: false,
    component: () => import('@/views/Layout'),
    children: [
      {
        name: '主页面',
        path: '/main/index',
        component: () => import('@/views/Main')
      }
    ]
  },
  {
    name: '页面2',
    path: '/main2',
    component: () => import('@/views/Layout'),
    children: [
      {
        name: 'xxx',
        path: '/main2/xxx',
        component: () => import('@/views/System')
      },
      {
        name: 'xxx1',
        path: '/main2/xxx1',
        component: () => import('@/views/cont')
      },
      {
        name: 'xxx2',
        path: '/main2/xxx2',
        component: () => import('@/views/echarts')
      },
      {
        name: 'xxx3',
        path: '/main3/xxx3',
        component: () => import('@/views/echarts/force')
      },
      {
        name: 'xxx4',
        path: '/main3/xxx4',
        component: () => import('@/views/Excel')
      },
      {
        name: 'charts-category',
        path: '/main3/charts-category',
        component: () => import('@/views/Category')
      }
    ]
  },
  {
    path: '/main3',
    name: '主页面3',
    isSingle: true,
    hide: false,
    component: () => import('@/views/Layout'),
    children: [
      {
        name: '主页面3',
        path: '/main3/index',
        component: () => import('@/views/Main3')
      }
    ]
  },
  {
    path: '/twitter',
    name: 'twitter',
    isSingle: true,
    hide: false,
    component: () => import('@/views/Layout'),
    children: [
      {
        name: 'twitter',
        path: '/twitter/index',
        component: () => import('@/views/Twitter')
      }
    ]
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@/views/Layout'),
    children: [
      {
        name: 'map',
        path: '/map/index',
        component: () => import('@/views/Map')
      },
      {
        name: 'dblMap',
        path: '/map/dblMap',
        component: () => import('@/views/Map/components/DblMap')
      },
      {
        name: 'MapLoc',
        path: '/map/MapLoc',
        component: () => import('@/views/Map/components/MapLoc')
      },
      {
        name: 'MapOnline',
        path: '/map/MapOnline',
        components: () => import('@/views/Map/components/MapOnline')
      }
    ]
  },
  {
    name: '系统管理',
    path: '/',
    children: [
      {
        path: '/',
        name: '退出'
      }
    ]
  }
]
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes
})
