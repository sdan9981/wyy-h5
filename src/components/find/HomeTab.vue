<template>
	<div class="tab">
		<van-swipe :loop="false">
			<van-swipe-item>
				<div class="tab-box">
					<div class="tab-svgBox">
						<font-awesome-icon :icon="['fas', 'ranking-star']" />
					</div>
					<span>排行榜</span>
				</div>
				<div class="tab-box">
					<div class="tab-svgBox">
						<font-awesome-icon :icon="['fas', 'calendar-check']" />
					</div>
					<span>每日推荐</span>
				</div>
				<div class="tab-box">
					<div class="tab-svgBox">
						<font-awesome-icon :icon="['fas', 'radio']" />
					</div>
					<span>私人FM</span>
				</div>
				<div class="tab-box">
					<div class="tab-svgBox">
						<font-awesome-icon :icon="['fas', 'clipboard-list']" />
					</div>
					<span>歌单</span>
				</div>
				<div class="tab-box">
					<div class="tab-svgBox">
						<font-awesome-icon :icon="['fas', 'book-quran']" />
					</div>
					<span>有声书</span>
				</div>

			</van-swipe-item>
			<van-swipe-item>
				<div class="tab-box">
					<div class="tab-svgBox">
						<font-awesome-icon :icon="['fas', 'compact-disc']" />
					</div>
					<span>数字专辑</span>
				</div>
				<div class="tab-box">
					<div class="tab-svgBox">
						<font-awesome-icon :icon="['fas', 'file-video']" />
					</div>
					<span>直播</span>
				</div>
				<div class="tab-box">
					<div class="tab-svgBox">
						<font-awesome-icon :icon="['fas', 'heart-pulse']" />
					</div>
					<span>关注新歌</span>
				</div>
				<div class="tab-box">
					<div class="tab-svgBox">
						<font-awesome-icon :icon="['fas', 'fa-star']" />
					</div>
					<span>歌房</span>
				</div>
				<div class="tab-box">
					<div class="tab-svgBox">
						<font-awesome-icon :icon="['fas', 'fa-gamepad']" />
					</div>
					<span>游戏专区</span>
				</div>

			</van-swipe-item>
		</van-swipe>


	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.tab {
		padding: 0.2rem;
		box-sizing: border-box;

		.van-swipe {
			width: 7.1rem;
			height: 1.6rem;

			::v-deep .van-swipe__indicators {
				bottom: 0;

				.van-swipe__indicator {
					background: #ffabcb;
					width: 0.2rem;
					border-radius: 0.2rem;
					height: 0.04rem;
				}

				& .van-swipe__indicator--active {
					background: #ff759f;
					width: 0.4rem;
				}
			}
		}

		.van-swipe-item {
			display: flex;
			align-items: center;
			grid-column-gap: 0.56rem;
			justify-content: space-between;

			.tab-box {
				display: flex;
				flex-direction: column;
				align-items: center;
				box-sizing: border-box;
				flex-shrink: 0;

				.tab-svgBox {
					width: 0.8rem;
					height: 0.8rem;
					box-sizing: border-box;
					border-radius: 50%;
					background: #ffe9ef;
					display: flex;
					justify-content: center;
					align-items: center;

					svg {
						font-size: 0.44rem;
						color: $theme;
					}
				}

				span {
					font-size: 12px;
					color: $font-small;
					margin-top: 0.1rem;
				}
			}
		}

	}
</style>
