import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{ 
		path: '/',
		name: 'Find',
		component: () => import('@/views/FindView.vue')
	},
	//歌单详情
	{
		path: '/musicdetial',
		name: 'MusicDetial',
		component: () => import('@/views/MusicDetailView.vue')
	},
	//搜索
	{
		path: '/search',
		name: 'Search',
		component: () => import('@/views/SearchView.vue')
	}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router