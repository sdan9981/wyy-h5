import instance from '@/request'

//获取首页轮播
export const apiGetBanner = () => {
	return instance({
		method: 'GET',
		url: '/banner?type=2'
	})
}

//获取每日推荐歌单列表 /recommend/resource
export const apiRecommentSongs = () => {
	return instance({
		method: 'GET',
		url: '/recommend/resource'
	})
}

//获取所有榜单 /toplist
export const apiGetTopList = () => {
	return instance({
		method: 'GET',
		url: '/toplist'
	})
}