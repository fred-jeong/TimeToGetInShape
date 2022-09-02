const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      { test: /\.css$/, use: ['css-loader'] },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
}