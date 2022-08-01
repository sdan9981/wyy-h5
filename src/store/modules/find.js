import { UPDATE_TOPLIST_OFFICIAL } from '@/store/mutation-types'
import { apiGetTopList } from '@/request/api/find'
export default {
	namespaced: true,
	state: () => ({
		//官方榜单列表
		topListOfficial: [],
		
	}),
	mutations: {
		[UPDATE_TOPLIST_OFFICIAL] (state,cont) {
			state.topList = cont
		}
	},
	actions: {
		getTopList: async (context) => {
			const res = await apiGetTopList()
			const officialArr = res.filter(item => {
				return item.ToplistType !== undefined || item.ToplistType != null
			})
			console.log(officialArr)
		}
	}
}