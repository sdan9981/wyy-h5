import {
	getCurrentInstance,
	reactive,
	onMounted
} from 'vue'
import { useStore } from 'vuex'


export const usePlay = () => {
	const instance = getCurrentInstance()
	const useStores = useStore()
	const obj = reactive({
		audio: {},
		interVal: 0
	})
	
	onMounted(() => {
		obj.audio = instance.refs.audio
	})
	
	const play = () => {	
		if (obj.audio.paused) {
			obj.audio.play()
			useStores.commit('play/UPDATE_IS_PLAY', true)
			updateTime()
		} else {
			obj.audio.pause()
			useStores.commit('play/UPDATE_IS_PLAY', false)
			clearInterval(obj.interVal)
		}
	}
	
	const updateTime = () => {
		obj.interVal = setInterval(() => {
			useStores.commit('play/UPDATE_CURRENT_TIME', obj.audio.currentTime)
		}, 1000)
	}
	
	return {
		play,
		updateTime
	}
}

