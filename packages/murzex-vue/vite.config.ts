import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vitePluginTailwindcss from '@tailwindcss/vite'
import vitePluginDts from 'vite-plugin-dts'

export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		vitePluginTailwindcss(),
		vitePluginDts({
			tsconfigPath: './tsconfig.build.json',
			copyDtsFiles: true,
			insertTypesEntry: true,
		}),
	],

	build: {
		lib: {
			entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
			name: 'murzex-vue',
			fileName: format => `index.${format}.js`,
		},

		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue',
				},
			},

			watch: {
				include: 'src/**'
			}
		},

		emptyOutDir: false,
		outDir: 'dist',
	},

	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
})
