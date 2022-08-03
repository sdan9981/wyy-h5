import {
	getCurrentInstance,
	reactive
} from 'vue'
import { useStore } from 'vuex'


export const usePlay = () => {
	const instance = getCurrentInstance()
	const useStores = useStore()
	const obj = reactive({
		audio: {}
	})
	
	const play = () => {
		obj.audio = instance.refs.audio
		if (obj.audio.paused) {
			obj.audio.play()
			useStores.commit('play/UPDATE_IS_PLAY', true)
		} else {
			obj.audio.pause()
			useStores.commit('play/UPDATE_IS_PLAY', false)
		}
	}
	return {
		play
	}
}

