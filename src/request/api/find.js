import instance from '@/request'

//获取首页轮播
export const apiGetBanner = () => {
	return instance({
		method: 'GET',
		url: '/banner?type=2'
	})
}

//获取每日推荐歌单列表 /recommend/resource  /personalized?limit=6
export const apiRecommentSongs = () => {
	return instance({
		method: 'GET',
		// url: '/recommend/resource'
		url: '/personalized?limit=6'
	})
}

//获取所有榜单 /toplist
export const apiGetTopList = () => {
	return instance({
		method: 'GET',
		url: '/toplist'
	})
}

//获取歌单详情 /playlist/detail?id=24381616
export const apiMusicDetail = (id) => {
	return instance({
		method: 'GET',
		url: `/playlist/detail?id=${id}`
	})
}

//获取词 /lyric?id=33894312
export const apiGetLyric = (id) => {
	return instance({
		method: 'GET',
		url: `/lyric?id=${id}`
	})
}