const webpack = require('webpack')
const common = require('./common.js')

module.exports = {
  entry: common.entry,
  output: common.output,
  resolve: common.resolve,
  externals: common.externals,
  module: {
    loaders:  [...common.loaders]
  },
  plugins: [...common.plugins],
  postcss: common.postcss
}
