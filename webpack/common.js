const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const envPlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
  'process.env.RTMP_SERVER': JSON.stringify(process.env.RTMP_SERVER || null),
  'process.env.RTMP_SERVER_HTTP_PORT': JSON.stringify(process.env.RTMP_SERVER_HTTP_PORT || 80),
  'process.env.RTMP_SERVER_RTMP_PORT': JSON.stringify(process.env.RTMP_SERVER_RTMP_PORT || 1935),
  'process.env.RTMP_SECRET': JSON.stringify(process.env.RTMP_SECRET || '')
})

module.exports = {
  context: './src',
  entry: 'main.jsx',
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve('./src')
    ]
  },
  externals: {
    "jquery": "jQuery",
    "react": "React",
    "react-dom": "ReactDOM",
    "react-router-dom": "ReactRouterDOM",
    "axios": "axios",
    "Pusher": "Pusher"
  },
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      hash: true
    }),
    envPlugin
  ]
}
