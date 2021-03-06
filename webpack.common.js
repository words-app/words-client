const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const GlobImporter = require('node-sass-glob-importer');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            importer: GlobImporter(),
            includePaths: [path.resolve(__dirname, 'src/scss')],
            sourceMap: true
          }
        }]
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
      title: 'words.'
    }),
  ],

  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      src: path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.scss']
  }
};
