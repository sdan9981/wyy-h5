<template>
	<div class="com-top detail-top">
		<div class="top-return">
			<font-awesome-icon :icon="['fas', 'arrow-left']" @click="$router.go(-1)" />
			<span>歌单</span>
		</div>
		<div class="top-option">
			<font-awesome-icon :icon="['fas', 'magnifying-glass']" />
			<font-awesome-icon :icon="['fas', 'ellipsis-vertical']" />
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.detail-top{
		@extend .padd-css;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: rgba(39, 39, 39, 0.1);
		>div{
			width: 49%;
			display: flex;
			align-items: center;
			svg{
				font-size: 0.48rem;
				color: $bj;
			}
			&.top-return{
				grid-column-gap: 0.4rem;
				span{
					font-size: 0.36rem;color: $bj;
				}
			}
			&.top-option{
				grid-column-gap: 0.6rem;
				justify-content: flex-end;
			}
		}
		
	}
</style>