import {
	UPDATE_ISSHOW_POPUP,
	UPDATE_IS_PLAY,
	UPDATE_PLAYINDEX,
	UPDATE_PLAYLIST,
	UPDATE_PLAYLIST_PUSH,
	UPDATE_IS_TABBAR
} from '@/store/mutation-types'

export default {
	namespaced: true,
	state: () => ({
		//播放列表
		playList: [],
		//是否显示弹出层
		isShowPopup: false,
		//是否显示音乐播放tabbar
		isPlayTabbar: false,
		//是否播放音乐
		isPlay: false,
		//当前播放的第几首
		playIndex: -1,

	}),
	mutations: {
		[UPDATE_ISSHOW_POPUP](state, val) {
			state.isShowPopup = val
		},
		[UPDATE_IS_PLAY](state, val) {
			state.isPlay = val
		},
		[UPDATE_PLAYINDEX](state, val) {
			state.playIndex = val
		},
		[UPDATE_PLAYLIST](state, val){
			state.playList = val
		},
		[UPDATE_PLAYLIST_PUSH](state,val){
			state.playList.splice(state.playIndex + 1,0,val)
			state.playList = [...new Set(state.playList)]
		},
		[UPDATE_IS_TABBAR] (state, val){
			state.isPlayTabbar = val
		}
	},
	actions: {
		updateisShowPopup: ({
			commit,
			state
		}, states) => {
			commit('UPDATE_ISSHOW_POPUP', states)
		},
		updateIsPlay: ({
			commit,
			state
		}, states) => {
			commit('UPDATE_IS_PLAY', states)
		},
		updatePlayIndex: ({
			commit,
			state
		}, states) => {
			commit('UPDATE_PLAYINDEX', states)
		}
	}
}
