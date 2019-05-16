const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].[contenthash].js",
    library: "SomeLibName",
    libraryTarget: "umd",
    chunkFilename: "[name].[contenthash].js"
  },

  devtool: "cheap-module-eval-source-map",

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"]
  },

  module: {
    rules: [
      { test: /\.(t|j)sx?$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },

  plugins: [new webpack.HashedModuleIdsPlugin()],

  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "all",
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `vendors.${packageName.replace("@", "")}`;
          }
        }
      }
    }
  }
};
