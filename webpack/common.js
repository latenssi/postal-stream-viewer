const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const commonEntry = './src/main.jsx'

const commonOutput = {
  path: './dist',
  filename: 'bundle.js',
  publicPath: '/'
}

const commonResolve = {
  extensions: ['', '.js', '.jsx'],
  root: [
    path.resolve('./src')
  ]
}

const commonExternals = {
  "jquery": "jQuery",
  "react": "React",
  "react-dom": "ReactDOM",
  "react-router": "ReactRouter",
  "axios": "axios",
  "Pusher": "Pusher"
}

const commonLoaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel'
  }
]

const commonPlugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body',
    hash: true
  })
]

module.exports = {
  entry: commonEntry,
  output: commonOutput,
  resolve: commonResolve,
  externals: commonExternals,
  loaders: commonLoaders,
  plugins: commonPlugins
}
