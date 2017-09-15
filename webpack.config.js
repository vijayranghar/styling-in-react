const path = require('path')
const extractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }]
      },
      {
        test: /\.scss$/,
        use: extractTextPlugin.extract({
        use: [
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
        fallback: "style-loader",
      })},
    ]
  },
  plugins: [
    new extractTextPlugin("style.css"),
  ]
};
