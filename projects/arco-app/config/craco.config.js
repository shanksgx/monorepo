/* eslint-disable @typescript-eslint/no-var-requires */
/* craco.config.js */
const setting = require('../src/setting/webpackSetting.json')
const path = require('path')
const resolve = (dir) => path.resolve(__dirname, `../${dir}`)
const CracoLessPlugin = require('craco-less')

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              'arcoblue-6': setting.primary
              // 'prefix': 'gloden',
            },
            javascriptEnabled: true
            //配置全局less 变量，不需要在使用的地方导入了
            // globalVars: {
            //   hack: `true; @import '@arco-design/web-react/dist/css/arco.css';`
            // }
          }
        }
      }
    }
  ]
}
