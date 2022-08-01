import {
	createStore
} from 'vuex'
import find from '@/store/modules/find'
import toplist from '@/store/modules/toplist'

export default createStore({
	state() {
		return {
			tabbar: [
				'find', 'podcast', 'my', 'follow', 'cloud'
			],
			tabbarNow: 'find',
		}

	},
	mutations: {

	},
	modules: {
		toplist
	}
})
