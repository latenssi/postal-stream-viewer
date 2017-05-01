const webpack = require('webpack')
const common = require('./common.js')

const optimizePlugin = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  },
  output: {
    comments: function(node, comment) {
      const text = comment.value
      const type = comment.type
      if (type == "comment2") {
        // multiline comment
        return /@copyright/i.test(text)
      }
    }
  }
})

module.exports = {
  entry: common.entry,
  output: common.output,
  resolve: common.resolve,
  externals: common.externals,
  module: {
    loaders:  [...common.loaders]
  },
  plugins: [...common.plugins, optimizePlugin],
  postcss: common.postcss
}
