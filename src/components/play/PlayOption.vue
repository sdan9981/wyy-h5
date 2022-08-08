<template>
	<div class="option">
		<div class="range">
			<span>
				{{ parseInt(currentTime / 60 % 60) < 10 ?  '0'+parseInt(currentTime / 60 % 60) : parseInt(currentTime / 60 % 60)}}:{{ parseInt(currentTime % 60) < 10 ? '0'+parseInt(currentTime % 60) : parseInt(currentTime % 60) }}
			</span>
			<van-slider min="0" v-model="currentTime" :max="duration" :step="0.05" active-color="#fff" inactive-color="#e2e2e2">
				<template #button>
					<div class="custom-button">{{ value }}</div>
				</template>
			</van-slider>
			<span>
				{{ parseInt(duration / 60 % 60) < 10 ?  '0'+parseInt(duration / 60 % 60) : parseInt(duration / 60 % 60)}}:{{ parseInt(duration % 60) < 10 ? '0'+parseInt(duration % 60) : parseInt(duration % 60) }}
			</span>
		</div>
		<div class="btn">
			<!-- 全部循环 -->
			<font-awesome-icon :icon="['fas', 'repeat']" />
			<!-- 随机循环 -->
			<!-- <font-awesome-icon :icon="['fas', 'shuffle']" /> -->
			<!-- 单曲循环 -->
			<!-- <font-awesome-icon :icon="['fas', 'rotate-right']" /> -->
			<font-awesome-icon :icon="['fas', 'backward-step']" />

			<font-awesome-icon 
			v-if="!isPlay" 
			class="btn-play" 
			@click="playFun"
			:icon="['far', 'circle-play']" />
			<font-awesome-icon v-else class="btn-play"
			@click="playFun"
			 :icon="['far', 'circle-pause']" />

			<font-awesome-icon :icon="['fas', 'forward-step']" />

			<font-awesome-icon :icon="['fas', 'list-ul']" />
		</div>
	</div>
</template>

<script>
	import {
		useState
	} from '@/utils'
	export default {
		setup(props){
			const useStates = useState(['isPlay'], 'play')
			return {
				...useStates
			}
		},
		props: {
			playFun: Function,
			duration: String,
			currentTime: String
		}
	}
</script>

<style lang="scss" scoped>
	.option {
		width: 100%;
		height: 2rem;
		position: absolute;
		left: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		grid-row-gap: 0.4rem;

		//底部按钮
		.btn {
			width: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;

			svg {
				font-size: 0.48rem;
				color: $bj;

			}

			.btn-play {
				font-size: 0.92rem;
			}
		}

		//进度条
		.range {
			width: 100%;
			@extend .padd-css;
			display: flex;
			justify-content: space-between;
			align-items: center;
			grid-column-gap: 0.2rem;

			span {
				font-size: 0.24rem;
			}

			span:nth-of-type(1) {
				color: $bj;
			}

			span:nth-of-type(2) {
				color: #d2d2d2;
			}

			.custom-button {
				width: 0.2rem;
				height: 0.2rem;
				background: $bj;
				border-radius: 50%;
			}
		}
	}
</style>
