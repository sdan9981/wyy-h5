<template>
	<div class="lyric">
		<p v-for="(item, index) in lyric" :key="index" :class="{active: (currentTime * 1000 >= item.time && currentTime * 1000 < item.pre)}">
			{{ item.lrc }}
		</p>		
	</div>
</template>

<script>
	export default {
		setup(props){
			
		},
		props: {
			lyric: Array,
			currentTime: String
		}
	}
</script>

<style lang="scss" scoped>
	.lyric{
		width: 100%;
		height: 90%;
		margin: 10% 0;
		overflow: scroll;
		display: flex;
		flex-direction: column;
		align-items: center;
		grid-row-gap: 0.4rem;
		p{
			font-size: 0.28rem;
			color: #dbdbdb;
			&.active{
				font-size: 0.32rem;
				color: $bj;
			}
		}
	}
</style>