<template>
	<div class="song-collection" :style="{width:itemWidth}" @click="$router.push({path:'/musicdetial',query:{id:item.id}})">
		<div class="song-cover" :style="{height:itemWidth}">
			<img :src="item.picUrl">
			<span class="play-num">
				<font-awesome-icon :icon="['fas', 'caret-right']" />
				{{ playCount }}
			</span>
		</div>
		<p class="song-des">{{ item.name }}</p>
	</div>
</template>

<script>
	import { ref,onMounted } from 'vue'
	export default {
		setup(props) {
		},
		props: {
			item: Object,
			itemWidth: String,
			playCount: String
		}
	}
</script>

<style lang="scss">
	.song-collection{
		flex-shrink: 0;
		.song-cover{
			width: 100%;
			position: relative;
			border-radius: 0.2rem;
			overflow: hidden;
			>img{
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
			.play-num{
				position: absolute;
				top: 0.08rem;
				right: 0.08rem;
				font-size: 0.24rem;
				color: $bj;
				display: flex;
				justify-content: center;
				align-items: center;
				background: rgba(52, 52, 52, .5);
				padding: 0.04rem 0.12rem;
				border-radius: 0.2rem;
				svg{
					font-size: 0.32rem;margin-right: 0.04rem;
				}
			}
		}
		.song-des{
			font-size: 12px;
			color: $font-color;
			@include more-line(2)
		}
	}
</style>
