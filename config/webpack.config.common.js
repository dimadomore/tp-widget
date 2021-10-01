const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const projectDir = path.resolve(__dirname, "../");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "widget.js",
    path: path.resolve(projectDir, "./dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(projectDir, "./src/index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".ts", ".tsx"],
  },
};
