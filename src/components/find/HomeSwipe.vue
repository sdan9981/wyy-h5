<template>
	<div class="swipe">
		<van-swipe :autoplay="3000" lazy-render indicator-color="#d43c33">
		  <van-swipe-item v-for="image in images" :key="image">
		    <img :src="image.pic" />
		  </van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	import { onMounted, reactive, toRefs } from 'vue'
	import { apiGetBanner } from '@/request/api/find'
	export default{
		setup(){
			const obj = reactive({
				images: []
			})
			onMounted(async () => {
				const res = await apiGetBanner()
				if(res.code == 200){
					obj.images = res.banners
				}
			})
			return {
				...toRefs(obj)
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.swipe{
		width: 100%;
		@extend .padd-css;
		box-sizing: border-box;
		overflow: hidden;
		height: 2.8rem;
		border-radius: 0.2rem;
		margin-top: 0.2rem;
		::v-deep .van-swipe{
			height: 100%;
		}
		::v-deep .van-swipe-item{
			img{
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: 0.2rem;
			}
		}
		::v-deep .van-swipe__indicators{
			left: 80%;
		}
	}
</style>