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
		<van-swipe class="swipe-box" :loop="false" :width="350" :show-indicators="false" ref="swipe">
			<van-swipe-item class="swipe-item" v-for="(item) in topListOfficial" :key="item">
				<div class="music-title">
					<span>{{ item.name }}</span>
					<van-icon name="arrow" />
				</div>
				<div class="music-info">
					<div class="info-cover">
						<img :src="item.coverImgUrl">
						<font-awesome-icon :icon="['fas', 'caret-right']" />
					</div>
					<div></div>
				</div>
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	import TitleSolt from '@/components/comslot/TitleSlot.vue'
	import {
		useState
	} from '@/utils'
	import {
		onMounted,
		getCurrentInstance
	} from 'vue'
	import {
		useStore
	} from 'vuex'
	export default {
		setup() {
			const useStates = useState(['topListOfficial'], 'toplist')
			const store = useStore()
			const internalInstance = getCurrentInstance()
			onMounted(() => {
				if (useStates.topListOfficial.value.length <= 0) {
					store.dispatch('toplist/getTopList')
				}
				
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
	.top-list {
		margin-bottom: 1.6rem;

		.swipe-box {
			padding: 0.2rem;
			height: 3.2rem;
			background: $bj;

			::v-deep .van-swipe__track {
				// padding: 0.2rem;
				grid-column-gap: 0.2rem;
			}

			.van-swipe-item {
				border-radius: 0.12rem;
				overflow: hidden;
				box-shadow: 0 0 3px 1px rgba(52, 52, 52, 0.2);
				box-sizing: border-box;
				padding: 0.32rem;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}

			.music-title{
				span{
					font-size: 0.32rem;
					font-weight: 600;
					color: $font-color;
				}
			}
			.music-info{
				display: flex;
				width: 100%;
				justify-content: space-between;
				.info-cover{
					width: 1.8rem;
					height: 1.8rem;
					border-radius: 0.12rem;
					overflow: hidden;
					position: relative;
					img{
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
					svg{
						position: absolute;
						bottom: 0.2rem;
						right: 0.4rem;
						font-size: 0.52rem;
						color: $bj;
					}
				}
			}
		}
	}
</style>
