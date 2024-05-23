import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import ChildrenView from '../views/ChildrenView.vue'
import VmodelView from '../views/VmodelView.vue'
import MenuView from '../views/MenuView.vue'
import LifecycleView from '../views/LifecycleView.vue'
import WatchView from '../views/WatchView.vue'
import ComputedView from '../views/ComputedView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: TestView,
      children: [
        {
          path: '/children',
          name: 'children',
          component: ChildrenView
        }
      ]
    },
    {
      path: '/v-model',
      name: 'v-model',
      component: VmodelView
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: LifecycleView
    },
    {
      path: '/watch',
      name: 'watch',
      component: WatchView
    },
    {
      path: '/computed',
      name: 'computed',
      component: ComputedView
    }
  ]
})

export default router
