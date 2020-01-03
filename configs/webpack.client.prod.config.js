'use strict';

const { resolve } = require('path');
const webpack = require('webpack');

const config = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[name].[contenthash].[id].bundle.js'
  },
  plugins: [new webpack.optimize.AggressiveMergingPlugin()],
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {
    runtimeChunk: 'single',
    minimize: true,
    splitChunks: {
      minSize: 10000,
      maxSize: 250000,
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
};

module.exports = config;
