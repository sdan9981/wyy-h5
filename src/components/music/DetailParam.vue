<template>
	<div class="param">
		<div class="param-list">
			<div>
				<font-awesome-icon :icon="['fas', 'square-plus']" />
				<span>{{ numList.subscribedCount }}</span>
			</div>
			<div>
				<font-awesome-icon :icon="['fas', 'comment-dots']" />
				<span>{{ numList.commentCount }}</span>
			</div>
			<div>
				<font-awesome-icon :icon="['fas', 'share-nodes']" />
				<span>{{ numList.shareCount }}</span>
			</div>
		</div>
		<span class="param-bj bj-left"></span><span class="param-bj bj-right"></span>
	</div>
</template>

<script>
	export default {
		setup(props) {
		},
		props: {
			numList: Object
		}
	}
</script>

<style lang="scss" scoped>
	.param{
		display: flex;
		justify-content: center;
		background-color: $bj;
		position: relative;
		margin-top: 0.2rem;
		height: 0.8rem;
		.param-list{
			width: 5.6rem;
			background: $bj;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-radius: 0.4rem;
			height: 0.8rem;
			border: 1px solid #dfdfdf;
			position: absolute;top: -0.4rem;
			padding: 0 2%;
			>div{
				display: flex;
				justify-content: center;
				align-items: center;
				width: 32%;
				color: $font-color;
			}
			>div:nth-of-type(2){
				border-left: 1px solid $font-color;
				border-right: 1px solid $font-color;
			}
		}
		.param-bj{
			width: 1rem;
			height: 0.2rem;
			background: $bj;
			position: absolute;
			top: 0;
			&.bj-left{
				left: -0.04rem;
				transform: rotate(6deg);
			}
			&.bj-right{
				right: -0.04rem;
				transform: rotate(-6deg);
			}
		}
	}
</style>
