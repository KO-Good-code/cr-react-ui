const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'production',
  entry: './src',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../lib'),
    libraryTarget: 'umd'
  },
  externals: [nodeExternals()]
}) ;