<template>
	<div class="com-top top" @click="$router.push('/search')">
		<font-awesome-icon :icon="['fas', 'bars']" />
		<div class="com-search top-search">
			<van-icon name="search" />
			<span>大家都在搜</span>
		</div>
		<font-awesome-icon :icon="['fas', 'microphone-lines']" />
	</div>
</template>

<script>
	import { ref } from 'vue'
	export default {
		setup(props, context) {
			const value = ref('');
			return {
				value
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top {
		@extend .padd-css;
		background: $bj;
		grid-column-gap: 0.32rem;
		svg{
			font-size: 0.44rem;
			color: $font-color;
		}
		.top-search{
			flex: 1;
			background-image: linear-gradient(to right, #ebddff, #ffdcfe);
			border-radius: 0.4rem;
			display: flex;
			justify-content: center;
			align-items: center;
			grid-column-gap: 0.08rem;
			i{
				font-size: 18px;color: $font-grey;
			}
			span{
				font-size: 14px;color: $font-grey;
			}
		}
	}
</style>
