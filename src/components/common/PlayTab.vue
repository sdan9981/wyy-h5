<template>
	<div class="playtab">
		<div class="playtab-info">
			<div class="playtab-cover">
				<img src="">
			</div>
			<div class="playtab-show">
				<span>名称</span>
				<span>-作者</span>
			</div>
		</div>
		<div class="playtab-btn">
			<font-awesome-icon :icon="['fas','circle-play']" />
			<!-- <font-awesome-icon :icon="['fas', 'circle-pause']" /> -->
			<font-awesome-icon :icon="['fas', 'list-ul']" />
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.playtab{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 1.2rem;
		height: 1rem;
		background: $bj;
		z-index: 99;
		border-top: 1px solid #e2e2e2;
		@extend .padd-css;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.playtab-btn{
			width: 1.6rem;
			flex-shrink: 0;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			grid-column-gap: 0.32rem;
			svg{
				font-size: 0.48rem;
				color: $font-color;
			}
		}
		.playtab-info{
			flex: 1;
			flex-shrink: 0;
			display: flex;
			align-items: center;
			grid-column-gap: 0.12rem;
			.playtab-cover{
				display: flex;
				align-items: center;
				justify-content: center;
				width: 0.8rem;
				height: 0.8rem;
				background: #000;
				border-radius: 50%;
			}
			.playtab-show{
				
				span:first-child{
					font-size: 0.32rem;
					color: $font-color;
				}
				span:nth-of-type(2){
					font-size: 0.24rem;
					color: $font-grey;
				}
			}
		}
		
	}
</style>