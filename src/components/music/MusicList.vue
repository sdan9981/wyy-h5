<template>
	<div class="music-list">
		<div class="list" v-for="(item, i) in musicList" :key="item.id">
			<div class="list-info">
				<div class="list-info__sort" v-show="isShowRank">
					{{ ++i }}
					<!-- <font-awesome-icon :icon="['fas', 'ranking-star']" /> -->
				</div>
				<div class="list-info__cont" :class="{'list-info__cont-long': !isShowRank}" @click="playMusic(item)">
					<h4>{{ item.name }}</h4>
					<p ref="listAuthor">
						<span v-show="item.sq != undefined">SQ</span>
						<template v-if="item.ar != undefined" v-for="(ar, n) in item.ar">
							<b v-if="n < item.ar.length-1">
								{{ ar.name }}/
							</b>
							<b v-else="n == ar.length">
								{{ ar.name }}
							</b>
						</template>
						<template v-else-if="item.artists != undefined" v-for="(ar, n) in item.artists">
							<b v-if="n < item.artists.length-1">
								{{ ar.name }}/
							</b>
							<b v-else="n == artists.length">
								{{ ar.name }}
							</b>
						</template>
						<template v-if="item.al">
							&minus;{{ item.al.name }}
						</template>
						<template v-else-if="item.album">
							{{ item.album.name }}
						</template>
					</p>
				</div>
			</div>
			<div class="list-option">
				<font-awesome-icon v-show="item.mv != undefined && item.mv > 0" :icon="['fab', 'youtube']" />
				<font-awesome-icon :icon="['fas', 'ellipsis-vertical']" />
			</div>
		</div>
	</div>
</template>

<script>
	// import { getCurrentInstance } from 'vue'
	import { useStore } from 'vuex'
	export default {
		setup(props) {
			const useStores = useStore()
			const playMusic = (item) => {
				if(item.album){
					item.al = item.album
					item.al.picUrl = item.album.artist.img1v1Url
				}
				useStores.commit('play/UPDATE_PLAYLIST_PUSH',item)
				useStores.dispatch('play/updatePlayIndex',parseInt(useStores.state.play.playIndex) + 1)
				useStores.dispatch('play/updateisShowPopup',true)
				useStores.commit('play/UPDATE_IS_TABBAR',true)
				useStores.commit('play/UPDATE_IS_PLAY', true)
			}
			return {
				playMusic
			}
		},
		props: {
			isShowRank: Boolean,
			musicList: Array
		}
	}
</script>

<style lang="scss" scoped>
	.music-list{
		width: 100%;
		@extend .padd-css;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background: $bj;
		.list{
			width: 100%;
			height: 1.2rem;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.list-info,.list-option{
				display: flex;
				align-items: center;
			}
			.list-option{
				width: 1.6rem;
				justify-content: flex-end;
				grid-column-gap: 0.4rem;
				svg{
					font-size: 0.44rem;
					color: #b2b2b2;
					width: 0.44rem;
				}
			}
			.list-info{
				width: 5.8rem;
				grid-column-gap: 0.2rem;
				.list-info__sort{
					width: 0.52rem;
					color: #b2b2b2;
					font-size: 0.28rem;
					svg{
						color: $theme;
					}
				}
				.list-info__cont{
					width: 4.8rem;
					h4{
						font-weight: 500;
						color: $font-color;
						@include one-line;
						font-size: 0.32rem;
						display: block;
					}
					p{
						font-size: 0.28rem;
						color: #b2b2b2;
						@include one-line;
						span{
							display: inline-block;
							border: 1px solid #eea3b1;
							font-size: 0.24rem;
							color: $theme;
							border-radius: 0.04rem;
							margin-right: 0.04rem;
						}
						b{
							font-style: normal;
							font-weight: 500;
						}
					}
				}
				& .list-info__cont-long{
					width: 5.2rem;
				}
			}
		}
	}
</style>