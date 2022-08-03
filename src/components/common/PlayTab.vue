<template>
	<div class="playtab">
		<div class="playtab-info">
			<div class="playtab-cover">
				<img :src="playList[playIndex].al.picUrl">
			</div>
			<div class="playtab-show" @click="showPopup">
				<span>{{ playList[playIndex].name }}</span>
				<span>-
					<template v-for="(athor, i) in playList[playIndex].ar">
						<span v-if="i < playList[playIndex].ar.length - 1">{{ athor.name }}/</span>
						<span v-else>{{ athor.name }}</span>
					</template>
				</span>
			</div>
		</div>
		<div class="playtab-btn">
			<font-awesome-icon v-if="!isPlay" :icon="['far','circle-play']" @click="play" />
			<font-awesome-icon v-else :icon="['far', 'circle-pause']" @click="play" />
			<font-awesome-icon :icon="['fas', 'list-ul']" />
		</div>
		<audio ref="audio" :autoplay="isPlay" :src="`https://music.163.com/song/media/outer/url?id=${playList[playIndex].id}.mp3`"></audio>
		<van-popup v-model:show="isShowPopup" position="bottom" :style="{ height: '100%' }">
			<PlayDetail :playFun="play"></PlayDetail>
		</van-popup>
	</div>
</template>

<script>
	import {
		useState
	} from '@/utils'
	import PlayDetail from '@/components/play/PlayDetail.vue'
	import {
		getCurrentInstance,
		onMounted,
		onUpdated,
		reactive
	} from 'vue'
	import {
		useStore
	} from 'vuex'
	import {
		usePlay
	} from '@/composables/usePlay'
	export default {
		setup() {
			const useStates = useState(['isShowPopup', 'playList', 'playIndex', 'isPlay'], 'play')
			const instance = getCurrentInstance()
			const useStores = useStore()
			const obj = reactive({
				audio: {}
			})
			// const {
			// 	play
			// } = usePlay()
			const showPopup = () => {
				useStores.dispatch('play/updateisShowPopup', true)
			}
			onMounted(() => {
				obj.audio = instance.refs.audio
			})
			const play = () => {		
				if (obj.audio.paused) {
					obj.audio.play()
					useStores.commit('play/UPDATE_IS_PLAY', true)
				} else {
					obj.audio.pause()
					useStores.commit('play/UPDATE_IS_PLAY', false)
				}
			}
			
			return {
				...useStates,
				play,
				showPopup
			}
		},
		components: {
			PlayDetail
		}
	}
</script>

<style lang="scss" scoped>
	.playtab {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 1.2rem;
		height: 1rem;
		background: $bj;
		z-index: 120;
		border-top: 1px solid #e2e2e2;
		@extend .padd-css;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.playtab-btn {
			width: 1.6rem;
			flex-shrink: 0;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			grid-column-gap: 0.32rem;

			svg {
				font-size: 0.48rem;
				color: $font-color;
			}
		}

		.playtab-info {
			flex: 1;
			flex-shrink: 0;
			display: flex;
			align-items: center;
			grid-column-gap: 0.12rem;

			.playtab-cover {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 0.8rem;
				height: 0.8rem;
				background: #000;
				border-radius: 50%;

				img {
					width: 0.4rem;
					height: 0.4rem;
					border-radius: 50%;
				}
			}

			.playtab-show {
				width: 4.4rem;
				display: flex;
				align-items: center;

				>span:first-child {
					// width: 4.4rem;
					font-size: 0.32rem;
					flex-shrink: 0;
					color: $font-color;
					display: inline-block;
					@include one-line;
				}

				>span:nth-of-type(2) {
					// width: 4.4rem;
					display: inline-block;
					@include one-line;
					font-size: 0.24rem;
					color: $font-grey;
				}
			}
		}

	}
</style>
