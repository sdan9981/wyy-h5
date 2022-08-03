<template>
	<TabBar />
	<PlayTab v-if="$store.state.play.isPlayTabbar" />
  <router-view></router-view>
</template>

<script setup>
	import TabBar from '@/components/common/TabBar.vue'
	import PlayTab from '@/components/common/PlayTab.vue'
	components: {
		TabBar,
		PlayTab
	}
	
</script>

<style scoped>
</style>
