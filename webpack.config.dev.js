const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    port: '3001',
    historyApiFallback: true,
    hot: true,
    noInfo: true,
    quiet: false,
    contentBase: './public',
  },
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './src/client/index.tsx',
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: 'app.js',
    path: __dirname + '/public',
    publicPath: '/',
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()],
});
