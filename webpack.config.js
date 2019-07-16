const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    bundle: "./src/client/app/app.module.js"
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.(scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/index.html"
    })
  ]
};
