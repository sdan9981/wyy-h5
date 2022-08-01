<template>
	<div class="find">
		<HomeTop />
		<HomeSwipe />
		<HomeTab />
		<title-solt>
			<template #titleName>
				<h3>推荐歌单</h3>
			</template>
			<template #more>
				<span>更多</span>
				<van-icon name="arrow" />
			</template>
		</title-solt>
		<div class="song-coll">
			<SongCollection v-for="(item,i) in recomendSongs" :key="item.id" :item="item" itemWidth="2.2rem"
				:playCount="getPlayCount(item.playcount)">
			</SongCollection>
		</div>
		<HomeToplist/>
	</div>
</template>

<script>
	import HomeTop from '@/components/find/HomeTop.vue'
	import HomeSwipe from '@/components/find/HomeSwipe.vue'
	import HomeTab from '@/components/find/HomeTab.vue'
	import TitleSolt from '@/components/comslot/TitleSlot.vue'
	import SongCollection from '@/components/find/SongCollection.vue'
	import HomeToplist from '@/components/find/HomeToplist.vue'
	import useplayCount from '@/composables/usePlayCount'
	import {
		apiRecommentSongs
	} from '@/request/api/find'
	import {
		reactive,
		onMounted,
		toRefs
	} from 'vue'

	export default {
		setup() {
			const obj = reactive({
				recomendSongs: [],
			})
			const getPlayCount = useplayCount()

			//获取每日推荐歌单
			onMounted(async () => {
				const res = await apiRecommentSongs()
				if (res.code == 200) {
					obj.recomendSongs = res.recommend
				}
			})

			return {
				...toRefs(obj),
				getPlayCount,
			}
		},
		components: {
			HomeTop,
			HomeSwipe,
			SongCollection,
			TitleSolt,
			HomeToplist
		}
	}
</script>

<style lang="scss" scoped>
	.find {
		width: 100vw;
		min-height: calc(100% - 1.2rem - 1.12rem);
		box-sizing: border-box;
		background-image: linear-gradient(#fdf4ff, $bj);
		.song-coll {
			@extend .padd-css;
			display: flex;
			grid-column-gap: 0.2rem;
			overflow: scroll;
		}
	}
</style>
