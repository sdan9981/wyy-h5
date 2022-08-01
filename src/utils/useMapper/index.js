import { useStore } from 'vuex'
import { computed } from 'vue'

export const useStateMapper = (mapper, mapFn) => {
	const store = useStore()
	const storeStateFns = mapFn(mapper)
	const storeState = {}
	Object.keys(storeStateFns).forEach(fnKey => {
		const fn = storeStateFns[fnKey].bind({ $store: store})
		storeState[fnKey] = computed(fn)
	})
	return storeState
}

export const useActionMapper = (mapper, mapFn) => {
	const store = useStore()
	const storeActionsFns = mapFn(mapper)
	const storeAction = {}
	Object.keys(storeActionsFns).forEach(fnKey => {
		storeAction[fnKey] = storeActionsFns[fnKey].bind({ $store: store })
	})
	return storeAction
}