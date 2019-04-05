var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// Uncomment this line(and the one below), so see the real sizes, an restart the app
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isProduction = (env) => {
  return env === "production"
};
module.exports = {
  // entry: './src/index.js',
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'bundle.js'
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: "[name]__[local]__[hash:base64:5]"
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  devtool: isProduction ? "source-map" : "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new ExtractTextPlugin("style.css"),
    // new BundleAnalyzerPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    compress: isProduction ? true : false,
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    watchContentBase: true,
    progress: true
  },
};