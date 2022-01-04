const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  target: ["web", "es5"],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: ["babel-loader", "style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js)$/,
        exclude: [/(node_modules|bower_components)/],
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My app",
      template: "./app/index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "./app/assets/dog.jpg", to: "./assets" }],
    }),
  ],
};
