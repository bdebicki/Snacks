const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.svg/,
        loader: 'svgr/webpack',
        exclude: /node_modules/,
        options: { extract: true },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(false)
    })
  ],
  output: {
    filename: 'snacks.js',
    path: path.resolve(__dirname, 'tmp'),
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['.js'],
  },
}
