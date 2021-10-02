const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');
const path = require('path');
const projectDir = path.resolve(__dirname, '../');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(projectDir, './dist'),
    },
    hot: true,
  },
});
