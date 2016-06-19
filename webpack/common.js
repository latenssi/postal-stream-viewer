const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

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
    "react-router": "ReactRouter",
    "axios": "axios",
    "Pusher": "Pusher",
    "OneSignal": "OneSignal"
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
    new webpack.DefinePlugin({
      'process.env.PUSHER_TOKEN': JSON.stringify(process.env.PUSHER_TOKEN),
      'process.env.STREAMERS_ENDPOINT': JSON.stringify(process.env.STREAMERS_ENDPOINT)
    })
  ]
}
