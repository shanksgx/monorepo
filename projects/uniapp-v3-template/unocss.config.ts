import presetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

const prefix = 'goduer-'

const { presetWeappAttributify, transformerAttributify } = extractorAttributify({
  classPrefix: prefix
})

export default {
  presets: [
    presetWeapp({
      prefix,
      whRpx: true
    }),
    presetWeappAttributify(),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      'flex-center': 'flex justify-center items-center',
    },
  ],

  transformers: [
    transformerAttributify(),
    transformerClass(),
  ]
}