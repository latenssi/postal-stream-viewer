const webpack = require('webpack')
const common = require('./common.js')

module.exports = {
  entry: common.entry,
  output: common.output,
  resolve: common.resolve,
  externals: common.externals,
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    public: '192.168.1.110:8080',
    port: 8080
  },
  module: {
    loaders: common.loaders
  },
  plugins: [...common.plugins]
}
