<template>
	<div class="top-list">
		<title-solt>
			<template #titleName>
				<h3>排行榜</h3>
			</template>
			<template #more>
				<span>更多</span>
				<van-icon name="arrow" />
			</template>
		</title-solt>
		<van-swipe class="swipe-box" :loop="false">
			<van-swipe-item class="swipe-item" v-for="(item) in topListOfficial" :key="item">
				<div></div>
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	import TitleSolt from '@/components/comslot/TitleSlot.vue'
	import {
		useState
	} from '@/utils'
	import { onMounted } from 'vue'
	import {
		useStore
	} from 'vuex'
	export default {
		setup() {
			const useStates = useState(['topListOfficial'], 'toplist')
			const store = useStore()
			onMounted(() => {
				if (useStates.topListOfficial.value.length <= 0) {
					store.dispatch('toplist/getTopList')
				}
				console.log(useStates.topListOfficial.value)
			})
			return {
				...useStates
			}
		},
		components: {
			TitleSolt
		}
	}
</script>

<style lang="scss" scoped>
	.top-list{
		margin-bottom: 1.6rem;
		.swipe-box{
			@extend .padd-css;
		}
		.swipe-item{
			width: 4rem;
			height: 4rem;
		}
	}
</style>
