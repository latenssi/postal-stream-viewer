const webpack = require('webpack')
const common = require('./common.js')

const envPlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production'),
  'process.env.RTMP_SERVER': JSON.stringify(process.env.RTMP_SERVER),
  'process.env.RTMP_SERVER_HTTP_PORT': JSON.stringify(process.env.RTMP_SERVER_HTTP_PORT),
  'process.env.RTMP_SERVER_RTMP_PORT': JSON.stringify(process.env.RTMP_SERVER_RTMP_PORT)
})

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
  plugins: [...common.plugins, envPlugin, optimizePlugin],
  postcss: common.postcss
}
