const path = require('path')
const CracoLessPlugin = require('craco-less');

const resolve = pathName => path.resolve(__dirname, pathName)

module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin
    },
  ],
  // webpack
  webpack: {
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components'),
      'utils': resolve('src/utils')
    }
  }
}