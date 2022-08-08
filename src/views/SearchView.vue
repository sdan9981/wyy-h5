<template>
	<div class="search">
		<!-- 顶部搜索 -->
		<div class="com-top search-top">
			<font-awesome-icon :icon="['fas', 'arrow-left']" @click="$router.go(-1)" />
			<van-search v-model="inputVal" placeholder="请输入搜索关键词" input-align="left" />
			<span @click="searchBtn">搜索</span>
		</div>
		<!-- 搜索历史 -->
		<div class="search-history">
			<div class="history-title">
				<label>历史</label>
				<font-awesome-icon @click="delKeywords" :icon="['far', 'trash-can']" />
			</div>
			<div class="history-list">
				<span v-for="(item) in keywordList" @click="searchHistory(item)">
					{{ item }}
				</span>
			</div>
		</div>
		<!-- 搜索结果 -->
		<MusicList :isShowRank="true" :musicList="searchList"></MusicList>
	</div>
</template>

<script>
	import {
		reactive,
		toRefs,
		onMounted
	} from 'vue'
	import {
		apiSearchKeywords
	} from '@/request/api/find'
	import MusicList from '@/components/music/MusicList.vue'
	export default {
		setup() {
			const obj = reactive({
				inputVal: '',
				keywordList: [], //搜索历史列表
				searchList: [], //搜索结果列表
				
			})

			onMounted(() => {
				obj.keywordList = JSON.parse(localStorage.getItem('keywordList')) ? JSON.parse(localStorage
					.getItem('keywordList')) : []
			})

			//搜索
			const searchBtn = async () => {
				if (obj.inputVal.trim()) {
					obj.keywordList.unshift(obj.inputVal.trim())
					//去重
					obj.keywordList = [...new Set(obj.keywordList)]
					//固定长度
					if (obj.keywordList.length > 10) {
						obj.keywordList.slice(obj.keywordList.length - 1, 1)
					}
					localStorage.setItem("keywordList", JSON.stringify(obj.keywordList))
					const res = await apiSearchKeywords(obj.inputVal.trim())
					obj.searchList = res.result.songs ? res.result.songs : []
					obj.inputVal = ''
				}
			}
			
			//清除搜索历史
			const delKeywords = () => {
				localStorage.removeItem('keywordList')
				obj.keywordList = []
			}
			
			//点击搜索历史
			const searchHistory = async (item) => {
				const res = await apiSearchKeywords(item)
				obj.searchList = res.result.songs ? res.result.songs : []
			}

			return {
				...toRefs(obj),
				searchBtn,
				delKeywords,
				searchHistory
			}
		},
		components: {
			MusicList
		}
	}
</script>

<style lang="scss" scoped>
	.search {
		width: 100%;
		background: #f3f0f0;
		min-height: calc(100vh - 1.2rem);
		padding-top: 1.2rem;

		.search-top {
			@extend .padd-css;
			background: $bj;

			svg {
				font-size: 0.44rem;
				flex-shrink: 0;
			}

			>span {
				font-size: 0.32rem;
				flex-shrink: 0;
			}

			.van-search {
				width: 6rem;

				::v-deep .van-search__content {
					border-radius: 0.4rem;
				}
			}
		}

		.search-history {
			width: 100%;
			// margin-top: 1.2rem;
			padding: 0.4rem 0.2rem;
			display: flex;
			flex-direction: column;
			grid-row-gap: 0.32rem;

			.history-title {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;

				label {
					font-size: 0.32rem;
					font-weight: 600;
					color: $font-color;
				}

				svg {
					font-size: 0.32rem;
					color: $font-grey;
				}
			}

			.history-list {
				width: 100%;
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				grid-row-gap: 0.32rem;
				grid-column-gap: 0.32rem;

				span {
					background: $bj;
					font-size: 0.24rem;
					padding: 0.08rem 0.2rem;
					border-radius: 0.4rem;
					color: $font-grey;
				}
			}
		}
	}
</style>
