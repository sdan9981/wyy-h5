<template>
	<div class="com-top top">
		<font-awesome-icon :icon="['fas', 'bars']" />
		<van-search class="top-search" v-model="value" input-align="center" placeholder="请输入搜索关键词" />
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
		padding: 0.2rem;
		grid-row-gap: 0.32rem;
		svg{
			font-size: 0.44rem;
			color: $font-color;
		}
		.top-search{
			flex: 1;
			background: transparent;
			::v-deep .van-search__content{
				border-radius: 0.4rem;
				background-image: linear-gradient(to right, #ebddff, #ffdcfe);
			}
		}
	}
</style>
