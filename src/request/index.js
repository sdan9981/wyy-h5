import axios from 'axios'

const instance = axios.create({
	baseURL: import.meta.env.VITE_API,
	timeout: 3000,
});

// 添加请求拦截器
// instance.interceptors.request.use(function(config) {
// 	// 在发送请求之前做些什么
// 	return config;
// }, function(error) {
// 	// 对请求错误做些什么
// 	return Promise.reject(error);
// });

// 添加响应拦截器
instance.interceptors.response.use(
	(response) => {
		// console.log(response)
		const {
			data
		} = response
		if (data.code == 200 || data.code == 201) {
			return data
		} else {
			console.log(data)
			// ElMessage.error('is a error message')
			return Promise.reject(new Error(data))
		}
	}, (error) => {
		// 对响应错误做点什么
		// console.log(error)
		return Promise.reject(error);
	}
);

export default instance
