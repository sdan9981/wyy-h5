<template>
	<TabBar />
  <router-view></router-view>
</template>

<script setup>
	import TabBar from '@/components/common/TabBar.vue'
	components: {
		TabBar
	}
	
</script>

<style scoped>
</style>
