//@ts-nocheck
import { createSSRApp } from 'vue'
import uviewPlus from 'uview-plus'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)

  app.use(uviewPlus)

  return {
    app
  }
}

// 如此配置即可
uni.$u.setConfig({
	// 修改$u.config对象的属性
	config: {
		unit: 'rpx'
	},
	props: {
		radio: {
			size: 15
		}
	}
})