<template>
	<div class="tab">
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
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.tab{
		padding: 0.36rem;
		box-sizing: border-box;
		border-bottom: 1px solid #bbbbbb;
		display: flex;
		align-items: center;
		grid-column-gap: 0.56rem;
		overflow: scroll;
		.tab-box{
			display: flex;
			flex-direction: column;
			align-items: center;
			box-sizing: border-box;
			flex-shrink: 0;
			.tab-svgBox{
				width: 0.8rem;
				height: 0.8rem;
				box-sizing: border-box;
				border-radius: 50%;
				background: #ffe9ef;
				display: flex;
				justify-content: center;
				align-items: center;
				svg{
					font-size: 0.44rem;
					color: $theme;
				}
			}
			span{
				font-size: 12px;
				color: $font-small;
				margin-top: 0.1rem;
			}
		}
	}
</style>