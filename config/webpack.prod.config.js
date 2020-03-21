const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const config = require('./webpack.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const entryList = () => {
  const list = ['Model', 'Drawer']
  let result = {
    "index": './src'
  }
  list.forEach( i => {
    result[i] = `./src/components/${i}`
  })
  return result;
}

module.exports = merge(config, {
  mode: 'production',
  entry: entryList(),
  externals: { // 定义外部依赖，避免把react和react-dom打包进去
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    }
  },
  output: {
    filename: ({chunk}) => {
      let name = chunk.name;
      if ( name === 'index' ) {
        return `index.js`
      }
      return `[name]/index.js`
    },
    path: path.resolve(__dirname, '../lib'),
    libraryTarget: 'umd',
    publicPath: '/lib/'
  },
  externals: [nodeExternals()],
  plugins: [new CleanWebpackPlugin({
    cleanAfterEveryBuildPatterns: ['lib']
  })]
}) ;