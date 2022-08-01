<template>
	<div class="title">
		<div class="title-name">
			<slot name="titleName">
				<h3>推荐歌单</h3>
			</slot>
		</div>
		<div class="title-more">
			<slot name="more">
				<span>更多</span>
				<van-icon name="arrow" />
			</slot>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.title{
		width: 100%;
		@extend .padd-css;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		.title-name{
			display: flex;
			align-items: center;
			h3{
				font-size: 0.48rem;
				color: $font-color;
			}
		}
		.title-more{
			padding: 0.04rem 0.16rem;
			display: flex;align-items: center;
			justify-content: center;
			grid-column-gap: 0.04rem;
			border: 1px solid $font-grey;
			border-radius: 0.4rem;
			span{
				font-size: 14px;
				color: $font-color;
			}
		}
	}
</style>