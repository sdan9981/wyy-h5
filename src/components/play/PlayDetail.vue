<template>
	<div class="play">
		<img class="play-bj" :src="playList[playIndex].al.picUrl">
		<div class="play-top">
			<van-icon class="play-icon" name="arrow-down" @click="hidePopup" />
			<div class="top-info">
				<Vue3Marquee class="top-info__title" :duration="5">
					{{ playList[playIndex].name }}
				</Vue3Marquee>
				<p>
					<div>
						<template v-for="(author,i) in playList[playIndex].ar">
							<i class="top-info__author" v-if="i < playList[playIndex].ar.length - 1">
								{{ author.name }}/
							</i>
							<i class="top-info__author" v-else>
								{{ author.name }}
							</i>
						</template>
					</div>
					<span v-if="playList[playIndex].ar <= 1">关注</span>
					<van-icon v-else name="arrow" class="top-info__icon" />
				</p>
			</div>
			<van-icon class="play-icon" name="share-o" />
		</div>
		<!-- 中间 -->
		<div class="play-center">
			<!-- 磁盘 -->
			<PlayCd :coverImg="playList[playIndex].al.picUrl" :isPlay="isPlay"></PlayCd>
		</div>
		<!-- 底部 -->
		<PlayOption :playFun="playFun"></PlayOption>
	</div>
</template>

<script>
	import { Vue3Marquee } from 'vue3-marquee'
	import 'vue3-marquee/dist/style.css'
	import { useStore } from 'vuex'
	import { onMounted } from 'vue'
	import { useState } from '@/utils'
	import PlayOption from '@/components/play/PlayOption.vue'
	import PlayCd from '@/components/play/PlayCd.vue'
	export default {
		setup(){
			const useStores = useStore()
			const useStates = useState(['playList','playIndex','isPlay'],'play')
			
			//关闭弹窗
			const hidePopup = () => {
				useStores.dispatch('play/updateisShowPopup',false)
			}
			
			return {
				hidePopup,
				...useStates
			}
		},
		components: {
			Vue3Marquee,
			PlayOption,
			PlayCd
		},
		props: {
			playFun: Function
		}
	}
</script>

<style lang="scss" scoped>
	.play{
		width: 100%;
		height: 100%;
		position: relative;
		//背景
		.play-bj{
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			right: 0;
			z-index: -2;
			filter: blur(100px);
		}
		
		.play-top{
			width: 100%;
			height: 1.2rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			@extend .padd-css;
			position: absolute;
			top: 0;
			left: 0;
			.play-icon{
				font-size: 24px;
				color: $bj;
				flex-shrink: 0;
			}
			.top-info{
				width: 5rem;
				display: flex;
				flex-direction: column;
				align-items: center;
				grid-column-gap: 0.2rem;
				.top-info__title{
					font-size: 0.36rem;
					color: $bj;
					font-weight: 600;
				}
				p{
					display: flex;
					align-items: flex-end;
					grid-column-gap: 0.08rem;
					.top-info__author{
						font-style: normal;
						font-size: 0.28rem;
						color: $font-grey;
					}
					span{
						font-size: 0.24rem;
						color: $font-grey;
						border: 1px solid $font-grey;
						border-radius: 0.08rem;
						padding: 0 0.08rem;
					}
					.top-info__icon{
						color: $font-grey;
					}
					>div{
						display: flex;
						align-items: center;
						width: 4.8rem;
						@include one-line;
						justify-content: center;
						>i{
							flex-shrink: 0;
						}
					}
				}
			}
		}
		.play-center{
			width: 100%;
			position: absolute;
			top: 1rem;
			bottom: 2rem;
		}
	}
</style>