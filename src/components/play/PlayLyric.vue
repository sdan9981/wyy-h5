<template>
	<div class="lyric" ref="musicLyric">
		<p v-for="(item, index) in lyric" :key="index"
			:class="{active: (currentTime * 1000 >= item.time && currentTime * 1000 < item.pre)}">
			{{ item.lrc }}
		</p>
	</div>
</template>

<script>
	import {
		watch,
		getCurrentInstance,
		onMounted
	} from 'vue'
	import { useStore } from 'vuex'
	import {
		useState
	} from '@/utils'
	export default {
		setup(props) {
			const useStores = useStore()
			const useStates = useState(['playList', 'playIndex', 'currentTime', 'duration'], 'play')
			const instance = getCurrentInstance()
			
			watch([useStates.currentTime],
				(newValue) => {
					let p = document.querySelector('p.active')
					if (p.offsetTop > 200) {
						instance.refs.musicLyric.scrollTop = p.offsetTop - 200
					}
					if (newValue === useStates.duration.value) {
						if (useStates.playIndex.value === useStates.playList.length - 1) {
							useStore.commit('play/UPDATE_PLAYINDEX',0)
							useStates.commit('play/UPDATE_IS_PLAY',true)
						} else {
							useStore.commit('play/UPDATE_PLAYINDEX',parseInt(useStates.playIndex.value) + 1)
						}
					}
				}
			)
			return {
				...useStates
			}
		},
		props: {
			lyric: Array,
			// currentTime: String
		}
	}
</script>

<style lang="scss" scoped>
	.lyric {
		width: 100%;
		height: 90%;
		margin: 10% 0;
		overflow: scroll;
		display: flex;
		flex-direction: column;
		align-items: center;
		grid-row-gap: 0.4rem;

		p {
			font-size: 0.28rem;
			color: #dbdbdb;

			&.active {
				font-size: 0.32rem;
				color: $bj;
			}
		}
	}
</style>
