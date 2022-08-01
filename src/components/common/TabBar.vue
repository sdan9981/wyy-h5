<template>
	<div class="tabbar">
		<div class="tab" :class="[this.$store.state.tabbarNow == this.$store.state.tabbar[0] ? 'active' : '']">	
			<div class="tab-svgBox"><font-awesome-icon :icon="['fab', 'napster']" /></div>	
			<span>发现</span>	
		</div>
		<div class="tab" :class="[this.$store.state.tabbarNow == this.$store.state.tabbar[1] ? 'active' : '']">
			<div class="tab-svgBox"><font-awesome-icon :icon="['fas', 'podcast']" /></div>
			<span>播客</span>
		</div>
		<div class="tab" :class="[this.$store.state.tabbarNow == this.$store.state.tabbar[2] ? 'active' : '']">
			<div class="tab-svgBox"><font-awesome-icon :icon="['fas', 'music']" /></div>
			<span>我的</span>
		</div>
		<div class="tab" :class="[this.$store.state.tabbarNow == this.$store.state.tabbar[3] ? 'active' : '']">
			<div class="tab-svgBox"><font-awesome-icon :icon="['fas', 'heart-circle-plus']" /></div>
			<span>关注</span>
		</div>
		<div class="tab" :class="[this.$store.state.tabbarNow == this.$store.state.tabbar[4] ? 'active' : '']">
			<div class="tab-svgBox"><font-awesome-icon :icon="['fab', 'soundcloud']" /></div>
			<span>云村</span>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	const nowTab = ref('find')
</script>

<style lang="scss" scoped>
	.tabbar{
		width: 100%;
		height: 1.2rem;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		background: $bj;
		border: 1px solid #efefef;
		z-index: 100;
		.tab{
			width: 19%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.tab-svgBox{
				width: 0.6rem;
				height: 0.6rem;
				border-radius: 50%;
				box-sizing: border-box;
				display: flex;
				justify-content: center;
				align-items: center;
				svg{
					height: 0.44rem;
					color: $font-grey;
				}
			}
			span{
				font-size: 0.24rem;
				color: $font-grey;
			}
		}
		& .active{
			.tab-svgBox{
				background: $theme;
				svg{color: $bj;}
			}
			span{
				color: $theme;
			}
		}
	}
</style>