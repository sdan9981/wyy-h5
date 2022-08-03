<template>
	<div class="cd">
		<img class="needle-img" :class="{'needle-img__active': isPlay}" src="@/assets/img/needle-ab.png">
		<img class="cd-img" src="@/assets/img/cd.png">
		<img class="cover-img" :class="{'cover-img__active': isPlay,'cover-img__paused': !isPlay}" :src="coverImg">
	</div>
</template>

<script>
	export default {
		props: {
			coverImg: String,
			isPlay: Boolean
		}
	}
</script>

<style lang="scss" scoped>
	.cd {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: relative;

		.needle-img {
			position: absolute;
			top: 0.2rem;
			left: 46%;
			width: 2rem;
			transform: rotate(-20deg);
			transform-origin: 0 0;
			transition: all 1s;
			z-index: 8;
		}
		& .needle-img__active{
			transform: rotate(0deg);
		}

		.cd-img {
			width: 5.6rem;
			height: 5.6rem;
			position: absolute;
			top: 2rem;
			z-index: 6;
		}

		.cover-img {
			width: 3.6rem;
			height: 3.6rem;
			position: absolute;
			top: 3rem;
			z-index: 3;
			animation: rotate-ar 10s linear infinite;
		}

		.cover-img__active {
			animation-play-state: running;
		}

		.cover-img__paused {
			animation-play-state: paused;
		}

		@keyframes rotate-ar {
			0% {
				transform: rotateZ(0deg);
			}

			100% {
				transform: rotateZ(360deg);
			}
		}
	}
</style>
