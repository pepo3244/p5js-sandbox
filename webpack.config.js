const path = require("path");
const outputRootPath = path.resolve(__dirname, "app");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(outputRootPath, "scripts"),
    filename: "bundle.js",
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: {
    inline: true,
    contentBase: outputRootPath,
    publicPath: "/scripts/",
    watchContentBase: true,
    overlay: true,
  },
};
