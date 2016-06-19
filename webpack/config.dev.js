const webpack = require('webpack')
const common = require('./common.js')

const envPlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('dev'),
  'process.env.RTMP_SERVER': JSON.stringify('localhost'),
  'process.env.RTMP_SERVER_HTTP_PORT': JSON.stringify('8000'),
  'process.env.RTMP_SERVER_RTMP_PORT': JSON.stringify('1935'),
  'process.env.ONESIGNAL_APP_ID': JSON.stringify(process.env.ONESIGNAL_APP_ID)
})

module.exports = {
  entry: common.entry,
  output: common.output,
  resolve: common.resolve,
  externals: common.externals,
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8080
  },
  module: {
    loaders: common.loaders
  },
  plugins: [...common.plugins, envPlugin]
}
