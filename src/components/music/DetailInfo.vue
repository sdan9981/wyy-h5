<template>
	<div class="info">
		<div class="info-cover">
			<img :src="playlist.coverImgUrl">
			<span>
				<font-awesome-icon :icon="['fas', 'caret-right']" />
				{{ getPlayCount(playlist.playCount) }}
			</span>
		</div>
		<div class="info-cont">
			<h3>{{ playlist.name }}</h3>
			<div class="info-athor">
				<div class="athor-img">
					<img :src="playlist.creator.avatarUrl" alt="">
				</div>
				<span class="athor-name">{{ playlist.creator.nickname }}</span>
				<span class="athor-follow">+关注</span>
			</div>
			<div class="info-des">
				<p>{{ playlist.description }}</p>
				<van-icon name="arrow" />
			</div>
			
		</div>
	</div>
</template>

<script>
	import useplayCount from '@/composables/usePlayCount'
	export default {
		setup(props) {
			const getPlayCount = useplayCount()
			return {
				getPlayCount
			}
		},
		props: {
			playlist: Object
		}
	}
</script>

<style lang="scss" scoped>
	.info{
		padding: 0.4rem 0.2rem;
		display: flex;
		justify-content: space-between;
		grid-column-gap: 0.32rem;
		.info-cover{
			width: 2.4rem;
			height: 2.4rem;
			border-radius: 0.12rem;
			overflow: hidden;
			position: relative;
			flex-shrink: 0;
			>img{
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
			span{
				position: absolute;
				top: 0.2rem;
				right: 0.12rem;
				background: rgba(52, 52, 52, .4);
				padding: 0.04rem 0.08rem;
				border-radius: 0.04rem;
				color: $bj;
				font-size: 0.24rem;
			}
		}
		.info-cont{
			flex: 1;			
			h3{
				@include more-line(2);
				margin: 0 0 0.12rem 0;
			}
			.info-athor{
				display: flex;
				align-items: center;
				grid-column-gap: 0.12rem;
				margin-bottom: 0.16rem;
				.athor-img{
					width: 0.6rem;
					height: 0.6rem;
					border-radius: 50%;
					img{
						width: 100%;
						height: 100%;
						object-fit: cover;
						border-radius: 50%;
					}
				}
				.athor-name{
					font-size: 0.24rem;
					color: $font-grey;
				}
				.athor-follow{
					padding: 0.04rem 0.08rem;
					border-radius: 0.2rem;
					font-size: 0.24rem;
					color: $color-ef;
					background: rgba(209, 209, 209, 0.4);
				}
			}
			.info-des{
				display: flex;align-items: center;
				p{
					width: 4rem;
					font-size: 0.24rem;
					@include one-line;
					color: $font-grey;
				}
				i{
					font-size: 0.24rem;
					color: $font-grey;
				}
				
			}
		}
		
	}
</style>