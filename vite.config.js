import {
	defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite';
import {
	VantResolver
} from 'unplugin-vue-components/resolvers';
import {
	loadEnv
} from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({
	command,
	mode
}) => {
	const env = loadEnv(mode, process.cwd())
	return {
		plugins: [
			vue(),
			Components({
				resolvers: [VantResolver()],
			}),
		],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "@/assets/sass/fun.scss";`,
				}
			}
		},
		define: {
			__APP_ENV__: env.APP_ENV
		}
	}
})
