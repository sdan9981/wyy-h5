import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{ 
		path: '/',
		name: 'Find',
		component: () => import('@/views/FindView.vue')
	}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router