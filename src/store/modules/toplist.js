import {
	UPDATE_TOPLIST_OFFICIAL,
	UPDATE_TOPLIST_SELECTED,
	UPDATE_TOPLIST_GENER,
	UPDATE_TOPLIST_LANGUAGE
} from '@/store/mutation-types'
import {
	apiGetTopList
} from '@/request/api/find'
export default {
	namespaced: true,
	state: () => ({
		//官方榜单列表
		topListOfficial: [],
		//精选榜
		topListSelected: [],
		//精选榜名称
		topListSelectedName: ['网络热歌榜', '说唱巅峰榜', '黑胶VIP爱听榜', 'K歌榜', '专属榜', '达人榜', '硬地原创音乐榜', 'BEAT榜', '城市榜'],
		//曲风榜
		topListGenre: [],
		topListGenreName: ['云音乐电音榜', '云音乐ACG榜', '云音乐摇滚榜', '云音乐国电榜', '云音乐古典榜', '云音乐古风榜', '云音乐民谣榜', '云音乐中文DJ榜'],
		//语种榜
		topListLanguage: [],
		topListLanguageName: ['云音乐欧美热歌榜', '云音乐欧美新歌榜', '云音乐日语榜', '云音乐韩语榜', '云音乐俄语榜', '云音乐泰语榜', '云音乐越南语榜'],
	}),
	mutations: {
		//更新官方榜单
		[UPDATE_TOPLIST_OFFICIAL](state, cont) {
			state.topListOfficial = cont
		},
		//更新精选榜单
		[UPDATE_TOPLIST_SELECTED](state, cont) {
			state.topListSelected = cont
		},
		//更新曲风榜单
		[UPDATE_TOPLIST_GENER](state, cont) {
			state.topListGenre = cont
		},
		//更新语言榜单
		[UPDATE_TOPLIST_LANGUAGE](state, cont) {
			state.topListLanguage = cont
		}
	},
	actions: {
		getTopList: async (context) => {
			const res = await apiGetTopList()
			if (res.code == 200) {
				const officialArr = res.list.filter(item => {
					return item.ToplistType !== undefined
				})
				context.commit('UPDATE_TOPLIST_OFFICIAL', officialArr)
				
				const selectedArr = res.list.filter(item => {
					return item.name == context.state.topListSelectedName.find(i => {
						return item.name === i
					})
				})
				context.commit('UPDATE_TOPLIST_SELECTED', selectedArr)
				
				const genreArr = res.list.filter(item => {
					return item.name == context.state.topListGenreName.find(i => {
						return item.name === i
					})
				})
				context.commit('UPDATE_TOPLIST_GENER', genreArr)
				
				const languageArr = res.list.filter(item => {
					return item.name == context.state.topListLanguageName.find(i => {
						return item.name === i
					})
				})
				context.commit('UPDATE_TOPLIST_LANGUAGE', languageArr)
			}
		}
	}
}
