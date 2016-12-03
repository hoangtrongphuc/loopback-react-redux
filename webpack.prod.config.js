var path = require('path');
var webpack = require('webpack');
var ignore = new webpack.IgnorePlugin(/\.svg$/);
var nodeModulesDir = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './client/scripts/main.js',
    vendor: [
      'lodash',
      'moment',
      'normalizr',
      'react',
      'redux',
      'soundcloud',
    ],
  },
  output: {
    publicPath: 'http://localhost:8080/',
    filename: './client/public/js/[name].js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel?' + JSON.stringify({ presets: ['react', 'es2015', 'stage-0'] }), exclude: [nodeModulesDir] },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!sass') },
    ],
  },
  plugins: [
    ignore,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin('./client/public/css/main.css')],
};
