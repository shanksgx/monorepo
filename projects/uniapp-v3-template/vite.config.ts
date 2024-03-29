import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import commonjs from '@rollup/plugin-commonjs'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(() =>{
  return {
    transpileDependencies: ['uview-plus'],
    plugins: [uni(), commonjs(), Unocss()],
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    }
  }
})
