import {
	mapState,
	mapMutations,
	mapGetters,
	mapActions,
	useStore,
	createNamespacedHelpers
} from 'vuex'
import {
	useStateMapper
} from '@/utils/useMapper'

const checkType = data => Object.prototype.toString.call(data)

//导出useState
export const useState = (mapper,moduleName = null) => {
	let mapperFn = mapState

	//如果使用模块化，则使用vuex提供的createNamespacedHelpers方法找到对应模块的mapState方法
	if (checkType(moduleName) === "[object String]" && moduleName.length > 0) {
		mapperFn = createNamespacedHelpers(moduleName).mapState
	}
	return useStateMapper(mapper, mapperFn)
}

export const useMutations = (mapper, moduleName) => {
	let mapperFn = mapMutations
	//如果使用模块化，则使用vuex提供的createNamespacedHelpers方法找到对应模块的mapGetters方法
	if (checkType(moduleName) === "[object String]" && moduleName.length > 0) {
		mapperFn = createNamespacedHelpers(moduleName).mapMutations
	}
	return useActionMapper(mapper, mapperFn)
}

export const useGetters = (moduleName, mapper) => {
	let mapperFn = mapGetters
	//如果使用模块化，则使用vuex提供的createNamespacedHelpers方法找到对应模块的mapGetters方法
	if (checkType(moduleName) === "[object String]" && moduleName.length > 0) {
		mapperFn = createNamespacedHelpers(moduleName).mapGetters
	}
	return useStateMapper(mapper, mapperFn)
}

/**
 * 
 * @param {*} moduleName 模块名称
 * @param {*} mapper 方法名集合 ['fn1', 'fn2']
 * @returns 
 */
export function useActions(moduleName, mapper) {
    let mapperFn = mapActions;
    
    // 如果使用模块化，则使用vuex提供的createNamespacedHelpers方法找到对应模块的mapActions方法
    if (checkType(moduleName) === "[object String]" && moduleName.length > 0) {
        mapperFn = createNamespacedHelpers(moduleName).mapActions
    }
    return useActionMapper(mapper, mapperFn)
}
