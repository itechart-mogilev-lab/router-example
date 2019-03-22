module.exports = {
  devtool: "source-map",
  entry: __dirname + "/app/client.js",
  output: {
    path: __dirname + "/app/public",
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js"]
  }
};
