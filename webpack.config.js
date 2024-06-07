const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  // relative path
  entry: "./src/index.js",
  output: {
    // absolute path
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "build/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // lower than limit will be converted to base64
              // and added to bundle.js
              // more than 40000 will be a separate file
              limit: 40000,
            },
          },
          "image-webpack-loader",
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};

module.exports = config;
