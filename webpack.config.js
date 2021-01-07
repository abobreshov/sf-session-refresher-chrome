const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const ZipPlugin = require("zip-webpack-plugin");

module.exports = {
  entry: "./src/background.js",
  resolve: { extensions: ["*", ".js"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "background.js",
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/images", to: "images" },
        "src/manifest.json"
      ]
    }),
    new ZipPlugin({
      path: '../zip',
      filename: 'sfrefresher.zip'
    })
  ]
};
