<template>
	<div class="music-detail">
		<div class="top-box">
			<img class="top-bj" :src="playlist.coverImgUrl">
			<DetailTop></DetailTop>
			<DetailInfo v-if="infoShow" :playlist="playlist" />
			<DetailParam v-if="infoShow" :numList="numList"></DetailParam>
		</div>
		<div class="detail-list">
			<div class="detail-listTop">
				<div class="detail-listTop__all" @click="playAll">
					<font-awesome-icon :icon="['fas', 'circle-play']" />
					<span>
						<b>播放全部</b>
						<i>(547)</i>
					</span>
				</div>
				<div class="detail-listTop__down">
					<font-awesome-icon :icon="['fas', 'download']" />
					<font-awesome-icon :icon="['far', 'circle-check']" />
				</div>
			</div>
			
			<MusicList v-if="infoShow" :isShowRank="true" :musicList="playlist.tracks"></MusicList>
			
		</div>
	</div>
</template>

<script>
	import DetailTop from '@/components/music/DetailTop.vue'
	import DetailInfo from '@/components/music/DetailInfo.vue'
	import DetailParam from '@/components/music/DetailParam.vue'
	import MusicList from '@/components/music/MusicList.vue'
	import { apiMusicDetail } from '@/request/api/find'
	import { reactive,onMounted,toRefs } from 'vue'
	import { useRoute } from 'vue-router'
	import { useStore } from 'vuex'
	export default {
		setup(){
			const obj = reactive({
				playlist:{},
				privileges: [],
				infoShow: false,
				numList: {}
			})
			const useStores = useStore()
			onMounted(async () => {
				let id = useRoute().query.id
				const res = await apiMusicDetail(id)
				// console.log(res)
					if(res.code == 200){
						obj.playlist = res.playlist
						obj.privileges = res.privileges
						obj.numList['commentCount'] = res.playlist.commentCount
						obj.numList['shareCount'] = res.playlist.shareCount
						obj.numList['subscribedCount'] = res.playlist.subscribedCount
						obj.numList['id'] = res.playlist.id
						// console.log(obj.numList)
						obj.infoShow = true
					}
					// console.log(obj)
			})
			const playAll = () => {
				useStores.commit('play/UPDATE_PLAYLIST',obj.playlist.tracks)
				// console.log(useStores.state.play.playlist)
				useStores.dispatch('play/updatePlayIndex',0)
				useStores.dispatch('play/updateisShowPopup',true)
				useStores.commit('play/UPDATE_IS_TABBAR',true)
				useStores.commit('play/UPDATE_IS_PLAY', true)
			}
			return {
				...toRefs(obj),
				playAll
			}
		},
		components: {
			DetailTop,
			DetailInfo,
			DetailParam,
			MusicList
		}
	}
</script>

<style lang="scss" scoped>
	.music-detail{
		.top-box{
			height: 5.52rem;
			padding-top: 1.2rem;
			.top-bj{
				width: 100%;
				height: 4.8rem;
				position: absolute;
				left: 0;
				top: 0;
				z-index: -2;
				filter: blur(50px);
			}
		}
		.detail-list{
			background: $bj;
			.detail-listTop{
				@extend .padd-css;
				height: 1.2rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.detail-listTop__all{
					display: flex;
					align-items: center;
					grid-column-gap: 0.4rem;
					svg{
						font-size: 0.44rem;
						color: $theme;
					}
					span{
						b{
							font-size: 0.36rem;
						}
						i{
							font-size: 0.24rem;
							color: $font-grey;
							font-style: normal;
						}
					}
				}
				.detail-listTop__down{
					width: 2rem;
					display: flex;
					justify-content: flex-end;
					grid-column-gap: 0.4rem;
					svg{
						font-size: 0.44rem;
						color: $font-color;
					}
				}
				
			}
		}
	}
	
</style>