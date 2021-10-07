const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const projectDir = path.resolve(__dirname, '../');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'tp_widget.js',
    path: path.resolve(projectDir, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(projectDir, './src/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'singletonStyleTag',
              attributes: { id: 'tp-widget' },
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              url: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.ts', '.tsx'],
  },
};
