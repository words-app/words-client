const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    overlay: true,
  },

  devtool: 'source-map',

  entry: {
    app: './src/index.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }
    ]
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      title: 'Nizzotes Client'
    }),
  ],

  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components')
    },
    extensions: ['.js', '.jsx']
  }
};